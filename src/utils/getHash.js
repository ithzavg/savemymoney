const getHash = () =>{
    return location.hash.slice(1).toLocaleLowerCase().split('/')[1] || '/savemymoney';
} 
    

export default getHash;