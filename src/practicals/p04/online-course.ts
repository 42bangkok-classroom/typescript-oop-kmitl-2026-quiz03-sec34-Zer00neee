export class OnlineCourse {
    public courseName: string;
    public maxStudents: number;
    private enrolledStudents: number;
    private isOpen: boolean;

    constructor(courseName: string, maxStudents: number) {
        this.courseName = courseName;
        this.maxStudents = maxStudents;
        this.enrolledStudents = 0;
        this.isOpen = true;    
    }
    private canEnroll(): boolean {
        if (this.isOpen === true && this.enrolledStudents < this.maxStudents) {
            return true;
        } else {
            return false;
        }
    }
    public enroll(): boolean {
        if (this.canEnroll()) {
            this.enrolledStudents = this.enrolledStudents + 1;
            return true;
        } else {
            return false;
        }
    }
    public closeCourse(): void {
        this.isOpen = false;
    }
    public getAvailableSeats(): number {
        return this.maxStudents - this.enrolledStudents;
    }
    public getCourseStatus(): string {
        if (this.isOpen === true) {
            return "Open";
        } else {
            return "Closed";
        }
    }
}