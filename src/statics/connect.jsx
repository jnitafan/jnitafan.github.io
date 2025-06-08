const ConnectExample = () => {
  const examples = [
    { name: "Bones", file: "./archive/3DBonesExample.html" },
    { name: "Lungs", file: "./archive/3DLungsExample.html" },
    { name: "Planes", file: "./archive/3DPlanesExample.html" },
  ];

  return (
    <div
      className="iframe-gallery"
      style={{
        display: "flex",
        flexDirection: "column",
        flexWrap: "wrap",
        gap: "3rem",
      }}
    >
      {examples.map(({ name, file }) => (
        <div
          key={file}
          className="iframe-wrapper"
          style={{ width: "100vw", height: "48.4vw" }}
        >
          <h3>{name} Example</h3>
          <iframe
            src={file}
            title={`${name} Example`}
            width="100%"
            height="100%"
          />
        </div>
      ))}
    </div>
  );
};

export default ConnectExample;
