export default function ShoppingCart(){

    useEffect(() => {
        if (!token) {
          navigateTo('/log-in');
        }
      }, []);
      
    return(
        <p>ShoppingCart</p>
    )
}