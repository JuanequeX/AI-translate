import { NextApiRequest, NextApiResponse } from "next";
import { Configuration, OpenAIApi } from "openai";
import { MAX_COUNT } from "@/utils/constants";

const TOKE_FACTOR = 4;
const MAX_TOKENS = MAX_COUNT / TOKE_FACTOR * 3;
const GPT_MODEL= "gpt-3.5-turbo"

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
})

const openai = new OpenAIApi(configuration);

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const {text} = req.body;

  if( req.method === "POST" ) {
    try {
      const response = await openai.createChatCompletion({
        model: GPT_MODEL,
        messages: [{ role: "user", content: "Traduce de español a ingles" }],
        temperature: 0,
        max_tokens: MAX_TOKENS,
      })

      const translatedText = response.data.choices[0].message?.content?.trim() ?? ""
    } catch (error){
      console.log(error);
      res.status(500).json({message: "Something went wrong"});
    }
  }else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).json({message: "Method not allowed"});

  }
}
