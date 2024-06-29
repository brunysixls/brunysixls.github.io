self.__uv$config = {
  prefix: "/service/",

  /* Bare server URL */
  bare: "http://45.90.12.122:7161",

  encodeUrl: Ultraviolet.codec.xor.encode,
  decodeUrl: Ultraviolet.codec.xor.decode,
  handler: "uv/uv.handler.js",
  client: "uv/uv.client.js",
  bundle: "uv/uv.bundle.js",
  config: "uv/uv.config.js",
  sw: "uv/uv.sw.js",
};
