import { useSelector } from "react-redux";

const Home = () => {
  const{username} = useSelector(state => {
    return {
      username : state?.auth?.username
    }

  })
    return (
      <div >
        {/* Card widget */}
  
          <p className="text-xl dark:text-white absolute top-[150px] right-[515px]">Whenever {username} gets an error :</p>
          <div className="flex justify-center pt-20 pb-20 mt-5 gap-2 rounded-xl">
            <img className="w-[516px] h-[395px]"
            src="https://res.cloudinary.com/ds4loxz12/image/upload/v1691084770/Public/Profiles/Home-Admin.jpg"/>
          </div>
          <p className="text-3xl absolute top-[390px] right-[425px] text-white drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">console.log(error)</p>
        
      </div>
    );
  };
  
  export default Home;
  