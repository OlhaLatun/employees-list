import { getDateOfBirth } from "../Helpers/helpers"

class APIservice {

     async getResource() {
          const res = await fetch('https://yalantis-react-school-api.yalantis.com/api/task0/users')

          if (!res.ok) {
               throw new Error(`Could not fetch ${URL},
            error status ${res.status}`)
          }

          return await res.json()
     }

     async getMappedEmployees() {
          const data = await this.getResource()
          return data.map(this._mapEmployeeBirthday)
     }

     _mapEmployeeBirthday(employee) {
          return {
               firstName: employee.firstName,
               lastName: employee.lastName,
               id: employee.id,
               isActive: false,
               dob: getDateOfBirth(employee)
          }
     }
}

export { APIservice }