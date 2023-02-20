const { execSync } = require("child_process");
const tokens = require("./tokens.json");

const targetDir = "./themes";

const themes = Object.entries(tokens)
  .filter(([key]) => !(key.startsWith("$") || key === "BaseTheme"))
  .map(([key]) => key);

execSync(`git rm -r -f --ignore-unmatch ${targetDir}`, { stdio: "inherit" });
execSync(`mkdir ${targetDir}`, { stdio: "inherit" });
themes.forEach((name) => {
  execSync(
    `npx @sinchsmb/mktheme@latest -f tokens.json -t '${name}' ${targetDir}/'${name}.json'`,
    { stdio: "inherit" }
  );
  console.log("---");
});
execSync(`git add ${targetDir}`, { stdio: "inherit" });
