

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
     const monthNames = ['January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
    ];

     const date = new Date(employee.dob)

     const month = monthNames[date.getMonth()]
     const day = date.getDate()
     const year = date.getFullYear()
     
     return {
          firstName: employee.firstName,
          lastName: employee.lastName,
          id: employee.id,
          isActive: false,
          dob: { day: day, month: month, year: year},
          
     }        
   }
}

export { APIservice }