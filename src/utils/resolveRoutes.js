const resolveRoutes = (route) =>{
    if (route.length <= 3) {
        let validRoute = route === '/savemymoney' ? route : '/expense';
        return validRoute;
      }
    return `/${route}`;
}

export default resolveRoutes;