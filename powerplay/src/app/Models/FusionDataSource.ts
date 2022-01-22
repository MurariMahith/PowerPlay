import {FusionChart} from "./FusionChart";
import { FusionData } from "./FusionData";

export class FusionDataSource{
    
    chart : FusionChart;
    data : FusionData[];

    constructor()
    {
        this.chart = new FusionChart();
        this.data = [];
    }
}