export class Event
{
    id : Number;
    name : string;
    host : Number;
    organizedBy : Number;
    enrolledMembers : string;
    attendedMembers : string;
    totalSpots : Number;
    category : string;
    eventType : string;
    mode : string;
    location : string;
    description : string;
    status : string;
    startDate : string;
    startTime : string;
    endDate : string;
    endTime : string;
    isDeleted : boolean;
    tags : string = null;

    constructor()
    {
        this.id = 0;
        this.host = 0;
        this.organizedBy = 0;
        this.enrolledMembers = null;
        this.attendedMembers = null;
        this.totalSpots = 0;
        this.isDeleted = false;
    }
}
