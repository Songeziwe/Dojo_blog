import useFetch from './useFetch';
import BlogList from './BlogList';

// Functional component
// Hooks give functional components state
const Home = () => {
    const {data: blogs, isPending, error} = useFetch('http://localhost:8000/blogs');
    

    

    return (  
        <div className="home">
            {error && <div>{error}</div>}
            {isPending && <div>Loading...</div>}
           { // Conditional rendering
            blogs && <BlogList 
                        blogs = {blogs} 
                        title = 'All Blogs!'
                    />}
        </div>
    );
}
 
export default Home;