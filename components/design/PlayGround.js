import React, { useState, useEffect } from "react";

const Playground = ({html, css, js}) => {
  const [activeTab, setActiveTab] = useState("html");
  const [htmlCode, setHtmlCode] = useState(html);
  const [cssCode, setCssCode] = useState(css);
  const [jsCode, setJsCode] = useState(js);
  const [iframeSrcDoc, setIframeSrcDoc] = useState("");

  useEffect(() => {
    // Combine HTML, CSS, and JS code to form the content of the iframe
    const combinedCode = `
      <html>
        <head>
          <style>${cssCode}</style>
        </head>
        <body>
          ${htmlCode}
          <script>${jsCode}</script>
        </body>
      </html>
    `;

    setIframeSrcDoc(combinedCode);
  }, [htmlCode, cssCode, jsCode]);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="flex flex-col">
      {/* Code Editors */}
      <div className="flex-1 p-4">
        <div className="mb-4">
          <button
            className={`bg-[#2ec4b6]/10 text-white px-4 py-2 mr-2 rounded ${
              activeTab === "html" && "bg-blue-700"
            }`}
            onClick={() => handleTabChange("html")}
          >
            HTML
          </button>
          <button
            className={`bg-[#2ec4b6]/10 text-white px-4 py-2 mr-2 rounded ${
              activeTab === "css" && "bg-blue-700"
            }`}
            onClick={() => handleTabChange("css")}
          >
            CSS
          </button>
          <button
            className={`bg-[#2ec4b6]/10 text-white px-4 py-2 rounded ${
              activeTab === "js" && "bg-blue-700"
            }`}
            onClick={() => handleTabChange("js")}
          >
            JS
          </button>
        </div>
        <textarea
          className={`w-full h-1/3 resize-none ${
            activeTab !== "html" && "hidden"
          } bg-[#2ec4b6]/10 min-h-[300px] p-3 rounded-lg`}
          value={htmlCode}
          onChange={(e) => setHtmlCode(e.target.value)}
          placeholder="HTML code"
        ></textarea>
        <textarea
          className={`w-full h-1/3 resize-none ${
            activeTab !== "css" && "hidden"
          } bg-[#2ec4b6]/10 min-h-[300px] p-3 rounded-lg`}
          value={cssCode}
          onChange={(e) => setCssCode(e.target.value)}
          placeholder="CSS code"
        ></textarea>
        <textarea
          className={`w-full h-1/3 resize-none ${
            activeTab !== "js" && "hidden"
          } bg-[#2ec4b6]/10 min-h-[300px] p-3 rounded-lg`}
          value={jsCode}
          onChange={(e) => setJsCode(e.target.value)}
          placeholder="JS code"
        ></textarea>
      </div>

      {/* Result */}
      <div className="flex-1 p-4">
        <iframe
          className="w-full min-h-[250px] border bg-[#bfbfbf] rounded-lg"
          title="Result"
          srcDoc={iframeSrcDoc}
        ></iframe>
      </div>
    </div>
  );
};

export default Playground;
