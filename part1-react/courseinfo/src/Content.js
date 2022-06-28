import Part from "./Part.js";
const Content = ({content1, content2, content3}) => {
    
    return  (
        <>
        <Part part={content1.part} exercise={content1.exercise}/>
        <Part part={content2.part} exercise={content2.exercise}/>
        <Part part={content3.part} exercise={content3.exercise}/>
        </>
        );
}

export default Content