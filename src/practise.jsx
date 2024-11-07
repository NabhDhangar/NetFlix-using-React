export const Practises=()=>{
    const students=[1];
    return (
        <>
            <p>{!students.length && "No Students Found"}</p>
            <p>Number of Students: {students.length}</p>
        </>
    );
};