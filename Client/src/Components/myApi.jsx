export const getUserId = () =>{
    
        axios.get('"http://localhost:5174/api/user')
        .then(response => {
            setReviews(response.data);
        })
        .catch(error => {
            console.error('Error fetching reviews:', error);
        });
    }

