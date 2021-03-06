import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'

dayjs.extend(utc)

class DayjsDateProvider {
  dateNow(): Date {
    return dayjs().toDate()
  }

  convertToUTC(date: Date): string {
    return dayjs(date).utc().local().format()
  }

  compareInDays(start_date: Date, end_date: Date): number {
    const end_date_utc = this.convertToUTC(end_date)
    const start_date_utc = this.convertToUTC(start_date)

    const days = dayjs(end_date_utc).diff(start_date_utc, 'days')
    return days < 1 ? 1 : days
  }
  addDays(days: number): Date {
    return dayjs().add(days, 'days').toDate()
  }

  compareIfBefore(start_date: Date, end_date: Date): boolean {
    return dayjs(start_date).isBefore(end_date)
  }
}

export { DayjsDateProvider }
