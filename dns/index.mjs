import dns from "dns";
console.log(dns.getServers("https://www.google.com/"));
dns.resolve4("https://www.google.com", (err, address) => {
  console.log(address);
});
