import { Injectable } from '@nestjs/common';
import { userAttendanceDto } from './dto/user-attendance.dto';
import { Attendance } from './attendance.interface';
import { timerangeAttendanceDto } from './dto/timerange-attendance.dto';

@Injectable()
export class AttendanceService {

    private readonly attendanceDataDummy: Attendance[] = [
        {
            attendance_id: 1,
            user_id: 1,
            date_time: new Date('2025-11-04T10:00:00Z'), 
            status: 'present'
        }
    ]

    present(userAttendanceDto: userAttendanceDto) {
        try {
            this.attendanceDataDummy.push({
                attendance_id: this.attendanceDataDummy.length + 1,
                user_id: userAttendanceDto.user_id,
                date_time: new Date(),
                status: userAttendanceDto.status
            })
            const index = this.attendanceDataDummy.findLastIndex(u => u.user_id === userAttendanceDto.user_id)
            return {
                status: 'success',
                message: 'Attendance successfully recorded',
                data: this.attendanceDataDummy[index]
            }
        } catch (error) {
            return {
                status: 'failed',
                message: `Error when recording attendance: ${error}`,
                data: null
            }
        }
    }

    findHistory(id) {
        try {
            const history = this.attendanceDataDummy.filter(u => u.user_id === id)
            return {
                status: 'success',
                message: 'Attendance history succesfully found',
                data: history
            }
        } catch (error) {
            return {
                status: 'failed',
                message: `Error when finding attendance history: ${error}`,
                data: null
            }
        }
    }

    summary(id: number) {
        try {
            const monthHistory = this.attendanceDataDummy.filter(u => u.user_id === id && u.date_time.getMonth === new Date().getMonth)
            const index = this.attendanceDataDummy.findIndex(u => u.user_id === id)
            let presentTally = 0
            let permitTally = 0
            let sickTally = 0
            let alphaTally = 0
            for (let i = 0; i < monthHistory.length; i++) {
                if (monthHistory[i].status === 'present') {
                    presentTally++
                } else if (monthHistory[i].status === 'permit') {
                    permitTally++
                } else if (monthHistory[i].status === 'sick') {
                    sickTally++
                } else {
                    alphaTally++
                }
            }
            return {
                status: 'success',
                message: 'Attendance successfully summarized',
                data: {
                    user_id: this.attendanceDataDummy[index].user_id,
                    month: this.attendanceDataDummy[index].date_time.getMonth(),
                    attendance_summary: {
                        present: presentTally,
                        permit: permitTally,
                        sick: sickTally,
                        alpha: alphaTally
                    }
                }
            }
        } catch (error) {
            return {
                status: 'failed',
                message: `Error when summarizing attendance: ${error}`,
                data: null
            }
        }
    }

    analysis(timerangeAttendanceDto: timerangeAttendanceDto) {
        try {
            const monthly = this.attendanceDataDummy.filter(u => u.date_time < new Date(timerangeAttendanceDto.start_date) || u.date_time > new Date(timerangeAttendanceDto.end_date))
            
        } catch (error) {
            
        }
    }

}
