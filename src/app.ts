import path from "node:path";
import fastifyCookie from "@fastify/cookie";
import fastifyJwt from "@fastify/jwt";
import fastifyStatic from "@fastify/static";
import fastify from "fastify";
import multer from "fastify-multer";
import { ZodError } from "zod";
import { env } from "./env/env";
import { farmRoutes } from "./controller/farm/routes";
import cors from '@fastify/cors'

export const app = fastify();


app.register(cors, {
credentials: true,
strictPreflight: false,
origin: '*',
methods: ['GET', 'PUT', 'POST', 'DELETE']
})

app.register(fastifyJwt, {
  secret: env.JWT_SECRET,
  cookie: {
    cookieName: "refreshToken",
    signed: false,
  },
  sign: {
    expiresIn: "10m",
  },
});

// app.register(fastifyStatic, {
//   root: path.join(__dirname, "../uploads"),
//   prefix: "/uploads",
// });
app.register(fastifyCookie);
//app.register(multer.contentParser);
app.register(farmRoutes);

app.setErrorHandler((error, _, reply) => {
  if (error instanceof ZodError) {
    return reply
      .status(400)
      .send({ message: "Validation error.", issues: error.format() });
  }

  if (env.NODE_ENV !== "production") {
    console.error(error);
  } else {
    // TODO: Here we should log to an external tool like Sentry
  }
  return reply.status(500).send({ message: "Internal server error." });
});
