using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Microsoft.OpenApi.Models;
using PowerPlay.Api.Models;
using PowerPlay.Api.Services.Contacts;
using PowerPlay.Api.Services.Repositories;

namespace PowerPlay.Api
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddCors();

            services.AddControllers();

            var connectionString = Configuration.GetConnectionString("PowerPlayDatabase");

            services.AddDbContext<PowerPlayDevContext>(options =>
                options.UseSqlServer(connectionString));
            //services.AddCors(options => options.AddPolicy("ApiCorsPolicy", builder =>
            //{
            //    builder.WithOrigins("localhost:4200").AllowAnyMethod().AllowAnyHeader();
            //}));

            AddCustomServices(services);

            AddSwagger(services);
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            // global cors policy
            app.UseCors(x => x
                .AllowAnyMethod()
                .AllowAnyHeader()
                .SetIsOriginAllowed(origin => true) // allow any origin
                .AllowCredentials()); // allow credentials


            app.UseHttpsRedirection();

            app.UseRouting();

            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });
            //app.UseCors(builder => builder
            //     .AllowAnyOrigin()
            //     .AllowAnyMethod()
            //     .AllowAnyHeader());

            app.UseSwagger();


            app.UseSwaggerUI(options => options.SwaggerEndpoint("/swagger/v2/swagger.json", "PowerPlay Services"));
        }

        private void AddSwagger(IServiceCollection services)
        {
            // Register the Swagger generator, defining 1 or more Swagger documents
            services.AddSwaggerGen(c =>
            {
                c.SwaggerDoc("v2", new OpenApiInfo { Version = "v2", Title = "PowerPlay API" });
            });
        }

        private void AddCustomServices(IServiceCollection services)
        {
            services.AddTransient<IClub, ClubRepository>();
            services.AddTransient<IEvent, EventRepository>();
        }
    }
}
