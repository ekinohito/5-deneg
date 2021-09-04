// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export default async (req, res) => {
  await sleep(1000)
  res.status(200).json({
    "ndfl": "10000",
    "npp": "123124",
    "whole": "12415135235",
  })
}
