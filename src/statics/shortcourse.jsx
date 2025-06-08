const ShortCourseExample = () => {
  return (
    <>
      <div className="bg-yellow-300 text-black p-4 text-center w-screen">
        This is a web snapshot thanks to waybackmachine for archival purposes.
        Missing most if not all functionality.
      </div>
      {console.log("Suprressing all scripts in the iframe.")}
      <div
        style={{
          height: "100vh",
          width: "100vw",
          cursor: "not-allowed",
        }}
      >
        <iframe
          src="./ShortCoursesExample.html"
          sandbox=""
          allow=""
          referrerPolicy="no-referrer"
          style={{ pointerEvents: "none" }}
          title={`Short Courses Example`}
          width="100%"
          height="100%"
        />
      </div>
    </>
  );
};

export default ShortCourseExample;
