import { DiagnosticCenter } from "./DiagnosticCenter";

export class Appointment
{
    public userId:number;
	public appointmentId:number;
	public testId:number;
	public dateTime:Date;
	public approved:boolean;
	public center:DiagnosticCenter;
}