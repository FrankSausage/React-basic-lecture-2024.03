console.log(__filename);
console.log(__dirname);

console.log(process.env.JAVA_HOME);

for (let i = 0; i < 10; i++)
  if (i == 5)
    process.exit();
  else
    console.log(i);

