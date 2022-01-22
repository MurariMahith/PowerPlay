export class User
{
    Id : Number;
    name : string;
    role : string;
    clubsUserCreated : Number[];
    clubsUserIsPartOf : Number[];
    eventsUserCreated : Number[];
    eventsUserEnrolled : Number[];
    eventsUserParticipated : Number[];
    status : string;
    presidentforClubs : Number[];
    associatedOrganization : string
    isDeleted : boolean;

    constructor()
    {
        console.log(localStorage.getItem("user"));
        var abc : User = JSON.parse(localStorage.getItem("user"));
        console.log(abc);
        this.Id = abc.Id;
        this.name = abc.name;
        this.role = abc.role;
        this.clubsUserCreated = abc.clubsUserCreated;
        this.clubsUserIsPartOf = abc.clubsUserIsPartOf;
        this.presidentforClubs = abc.presidentforClubs;
        this.eventsUserCreated = [];
        this.eventsUserEnrolled = [];
        this.eventsUserParticipated = [];
        this.status = abc.status;
        this.associatedOrganization = abc.associatedOrganization;
        this.isDeleted = true;

        



    }
}
