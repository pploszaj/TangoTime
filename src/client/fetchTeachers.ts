const getTeachers = async () => {
      const response = await fetch("/teachers");
      return response.json(); 
  }

  export default getTeachers;