/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/api/chat/route";
exports.ids = ["app/api/chat/route"];
exports.modules = {

/***/ "(rsc)/./app/api/chat/route.ts":
/*!*******************************!*\
  !*** ./app/api/chat/route.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   POST: () => (/* binding */ POST),\n/* harmony export */   maxDuration: () => (/* binding */ maxDuration)\n/* harmony export */ });\n/* harmony import */ var _ai_sdk_google__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ai-sdk/google */ \"(rsc)/./node_modules/@ai-sdk/google/dist/index.mjs\");\n/* harmony import */ var ai__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ai */ \"(rsc)/./node_modules/ai/dist/index.mjs\");\n/* harmony import */ var app_tools_generateImage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/tools/generateImage */ \"(rsc)/./app/tools/generateImage.ts\");\n\n// import {openai}\n\n\nconst tools = {\n    generateImage: app_tools_generateImage__WEBPACK_IMPORTED_MODULE_0__.generateImage\n};\n// Allow streaming responses up to 30 seconds\nconst maxDuration = 30;\nasync function POST(req) {\n    const { messages } = await req.json();\n    const SYSTEM_PROMPT = `\n        You are an AI assistant named \"ChatGPT Mobile\" running inside a mobile-first web app.\n        Your goals:\n        1. Provide accurate, concise, and user-friendly answers.\n        2. Always think step-by-step before answering.\n        3. Be warm, helpful, and slightly witty without being distracting.\n        4. Never guess — if unsure, ask clarifying questions.\n        5. Always format responses clearly for mobile viewing, using short paragraphs, bullet points, or numbered lists.\n        6. For code answers:\n          - Use syntax highlighting.\n          - Keep explanations under each code block.\n          - Avoid overly long code unless necessary; focus on clarity.\n        7. You can answer about:\n          - Programming (JavaScript, TypeScript, React, Next.js, Bootstrap, tRPC, Supabase, Auth0, Google OAuth, API integration).\n          - AI & machine learning concepts.\n          - General knowledge & reasoning.\n        8. If the user requests an image, call the image-generation API (Gemini or chosen provider) and return the image URL .\n        9. Avoid harmful, unsafe, or illegal instructions.\n        10. Be context-aware: maintain the conversation and adapt to the user's skill level.    \n        Respond with Emojis when suitable like for heading, and all.\n        Tone: Friendly, smart, and confident .\n        If the user provides unclear or incomplete instructions, respond by asking *specific* clarifying questions before answering.\n        `;\n    const result = (0,ai__WEBPACK_IMPORTED_MODULE_1__.streamText)({\n        // model: openai(\"gpt-4\"),\n        model: (0,_ai_sdk_google__WEBPACK_IMPORTED_MODULE_2__.google)(\"gemini-2.0-flash\"),\n        system: SYSTEM_PROMPT,\n        messages: (0,ai__WEBPACK_IMPORTED_MODULE_1__.convertToModelMessages)(messages),\n        tools\n    });\n    return result.toUIMessageStreamResponse();\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL2NoYXQvcm91dGUudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFDd0M7QUFDeEMsa0JBQWtCO0FBQ2lEO0FBRVg7QUFFeEQsTUFBTUksUUFBUTtJQUFFRCxhQUFhQSxvRUFBQUE7QUFBQztBQUU5Qiw2Q0FBNkM7QUFDdEMsTUFBTUUsY0FBYyxHQUFHO0FBRXZCLGVBQWVDLEtBQUtDLEdBQVk7SUFDckMsTUFBTSxFQUFFQyxRQUFRLEVBQUUsR0FBOEIsTUFBTUQsSUFBSUUsSUFBSTtJQUM5RCxNQUFNQyxnQkFBZ0IsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztRQXNCakIsQ0FBQztJQUVQLE1BQU1DLFNBQVNWLDhDQUFVQSxDQUFDO1FBQ3hCLDBCQUEwQjtRQUMxQlcsT0FBT1osc0RBQU1BLENBQUM7UUFDZGEsUUFBUUg7UUFDUkYsVUFBVU4sMERBQXNCQSxDQUFDTTtRQUNqQ0o7SUFDRjtJQUVBLE9BQU9PLE9BQU9HLHlCQUF5QjtBQUN6QyIsInNvdXJjZXMiOlsiL1VzZXJzL3NhbG1hbi9EZXNrdG9wL2NoYXQtc25hcC1nZW4vYXBwL2FwaS9jaGF0L3JvdXRlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IG9wZW5haSB9IGZyb20gXCJAYWktc2RrL29wZW5haVwiO1xuaW1wb3J0IHsgZ29vZ2xlIH0gZnJvbSBcIkBhaS1zZGsvZ29vZ2xlXCI7XG4vLyBpbXBvcnQge29wZW5haX1cbmltcG9ydCB7IHN0cmVhbVRleHQsIFVJTWVzc2FnZSwgY29udmVydFRvTW9kZWxNZXNzYWdlcyB9IGZyb20gXCJhaVwiO1xuXG5pbXBvcnQgeyBnZW5lcmF0ZUltYWdlIH0gZnJvbSBcImFwcC90b29scy9nZW5lcmF0ZUltYWdlXCI7XG5cbmNvbnN0IHRvb2xzID0geyBnZW5lcmF0ZUltYWdlIH07XG5cbi8vIEFsbG93IHN0cmVhbWluZyByZXNwb25zZXMgdXAgdG8gMzAgc2Vjb25kc1xuZXhwb3J0IGNvbnN0IG1heER1cmF0aW9uID0gMzA7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBQT1NUKHJlcTogUmVxdWVzdCkge1xuICBjb25zdCB7IG1lc3NhZ2VzIH06IHsgbWVzc2FnZXM6IFVJTWVzc2FnZVtdIH0gPSBhd2FpdCByZXEuanNvbigpO1xuICBjb25zdCBTWVNURU1fUFJPTVBUID0gYFxuICAgICAgICBZb3UgYXJlIGFuIEFJIGFzc2lzdGFudCBuYW1lZCBcIkNoYXRHUFQgTW9iaWxlXCIgcnVubmluZyBpbnNpZGUgYSBtb2JpbGUtZmlyc3Qgd2ViIGFwcC5cbiAgICAgICAgWW91ciBnb2FsczpcbiAgICAgICAgMS4gUHJvdmlkZSBhY2N1cmF0ZSwgY29uY2lzZSwgYW5kIHVzZXItZnJpZW5kbHkgYW5zd2Vycy5cbiAgICAgICAgMi4gQWx3YXlzIHRoaW5rIHN0ZXAtYnktc3RlcCBiZWZvcmUgYW5zd2VyaW5nLlxuICAgICAgICAzLiBCZSB3YXJtLCBoZWxwZnVsLCBhbmQgc2xpZ2h0bHkgd2l0dHkgd2l0aG91dCBiZWluZyBkaXN0cmFjdGluZy5cbiAgICAgICAgNC4gTmV2ZXIgZ3Vlc3Mg4oCUIGlmIHVuc3VyZSwgYXNrIGNsYXJpZnlpbmcgcXVlc3Rpb25zLlxuICAgICAgICA1LiBBbHdheXMgZm9ybWF0IHJlc3BvbnNlcyBjbGVhcmx5IGZvciBtb2JpbGUgdmlld2luZywgdXNpbmcgc2hvcnQgcGFyYWdyYXBocywgYnVsbGV0IHBvaW50cywgb3IgbnVtYmVyZWQgbGlzdHMuXG4gICAgICAgIDYuIEZvciBjb2RlIGFuc3dlcnM6XG4gICAgICAgICAgLSBVc2Ugc3ludGF4IGhpZ2hsaWdodGluZy5cbiAgICAgICAgICAtIEtlZXAgZXhwbGFuYXRpb25zIHVuZGVyIGVhY2ggY29kZSBibG9jay5cbiAgICAgICAgICAtIEF2b2lkIG92ZXJseSBsb25nIGNvZGUgdW5sZXNzIG5lY2Vzc2FyeTsgZm9jdXMgb24gY2xhcml0eS5cbiAgICAgICAgNy4gWW91IGNhbiBhbnN3ZXIgYWJvdXQ6XG4gICAgICAgICAgLSBQcm9ncmFtbWluZyAoSmF2YVNjcmlwdCwgVHlwZVNjcmlwdCwgUmVhY3QsIE5leHQuanMsIEJvb3RzdHJhcCwgdFJQQywgU3VwYWJhc2UsIEF1dGgwLCBHb29nbGUgT0F1dGgsIEFQSSBpbnRlZ3JhdGlvbikuXG4gICAgICAgICAgLSBBSSAmIG1hY2hpbmUgbGVhcm5pbmcgY29uY2VwdHMuXG4gICAgICAgICAgLSBHZW5lcmFsIGtub3dsZWRnZSAmIHJlYXNvbmluZy5cbiAgICAgICAgOC4gSWYgdGhlIHVzZXIgcmVxdWVzdHMgYW4gaW1hZ2UsIGNhbGwgdGhlIGltYWdlLWdlbmVyYXRpb24gQVBJIChHZW1pbmkgb3IgY2hvc2VuIHByb3ZpZGVyKSBhbmQgcmV0dXJuIHRoZSBpbWFnZSBVUkwgLlxuICAgICAgICA5LiBBdm9pZCBoYXJtZnVsLCB1bnNhZmUsIG9yIGlsbGVnYWwgaW5zdHJ1Y3Rpb25zLlxuICAgICAgICAxMC4gQmUgY29udGV4dC1hd2FyZTogbWFpbnRhaW4gdGhlIGNvbnZlcnNhdGlvbiBhbmQgYWRhcHQgdG8gdGhlIHVzZXIncyBza2lsbCBsZXZlbC4gICAgXG4gICAgICAgIFJlc3BvbmQgd2l0aCBFbW9qaXMgd2hlbiBzdWl0YWJsZSBsaWtlIGZvciBoZWFkaW5nLCBhbmQgYWxsLlxuICAgICAgICBUb25lOiBGcmllbmRseSwgc21hcnQsIGFuZCBjb25maWRlbnQgLlxuICAgICAgICBJZiB0aGUgdXNlciBwcm92aWRlcyB1bmNsZWFyIG9yIGluY29tcGxldGUgaW5zdHJ1Y3Rpb25zLCByZXNwb25kIGJ5IGFza2luZyAqc3BlY2lmaWMqIGNsYXJpZnlpbmcgcXVlc3Rpb25zIGJlZm9yZSBhbnN3ZXJpbmcuXG4gICAgICAgIGA7XG5cbiAgY29uc3QgcmVzdWx0ID0gc3RyZWFtVGV4dCh7XG4gICAgLy8gbW9kZWw6IG9wZW5haShcImdwdC00XCIpLFxuICAgIG1vZGVsOiBnb29nbGUoXCJnZW1pbmktMi4wLWZsYXNoXCIpLFxuICAgIHN5c3RlbTogU1lTVEVNX1BST01QVCxcbiAgICBtZXNzYWdlczogY29udmVydFRvTW9kZWxNZXNzYWdlcyhtZXNzYWdlcyksXG4gICAgdG9vbHMsXG4gIH0pO1xuXG4gIHJldHVybiByZXN1bHQudG9VSU1lc3NhZ2VTdHJlYW1SZXNwb25zZSgpO1xufVxuIl0sIm5hbWVzIjpbImdvb2dsZSIsInN0cmVhbVRleHQiLCJjb252ZXJ0VG9Nb2RlbE1lc3NhZ2VzIiwiZ2VuZXJhdGVJbWFnZSIsInRvb2xzIiwibWF4RHVyYXRpb24iLCJQT1NUIiwicmVxIiwibWVzc2FnZXMiLCJqc29uIiwiU1lTVEVNX1BST01QVCIsInJlc3VsdCIsIm1vZGVsIiwic3lzdGVtIiwidG9VSU1lc3NhZ2VTdHJlYW1SZXNwb25zZSJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./app/api/chat/route.ts\n");

/***/ }),

/***/ "(rsc)/./app/tools/generateImage.ts":
/*!************************************!*\
  !*** ./app/tools/generateImage.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   generateImage: () => (/* binding */ generateImage),\n/* harmony export */   tools: () => (/* binding */ tools)\n/* harmony export */ });\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var zod__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! zod */ \"(rsc)/./node_modules/zod/v3/types.js\");\n/* harmony import */ var _ai_sdk_openai__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ai-sdk/openai */ \"(rsc)/./node_modules/@ai-sdk/openai/dist/index.mjs\");\n/* harmony import */ var ai__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ai */ \"(rsc)/./node_modules/@ai-sdk/provider-utils/dist/index.mjs\");\n/* harmony import */ var ai__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ai */ \"(rsc)/./node_modules/ai/dist/index.mjs\");\n/* harmony import */ var _vercel_blob__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @vercel/blob */ \"(rsc)/./node_modules/@vercel/blob/dist/index.js\");\n\n\n\n\n\n\nconst isProd = \"development\" === \"production\";\nconst generateImage = (0,ai__WEBPACK_IMPORTED_MODULE_2__.tool)({\n    description: \"Generate an image\",\n    inputSchema: zod__WEBPACK_IMPORTED_MODULE_3__.object({\n        prompt: zod__WEBPACK_IMPORTED_MODULE_3__.string().describe(\"The prompt to generate the image from\")\n    }),\n    execute: async ({ prompt })=>{\n        let imageUrl = \"\"; // Initialize outside try block\n        console.log(\"tool called \");\n        try {\n            // 1. Generate the image from OpenAI\n            const { image } = await (0,ai__WEBPACK_IMPORTED_MODULE_4__.experimental_generateImage)({\n                model: _ai_sdk_openai__WEBPACK_IMPORTED_MODULE_5__.openai.imageModel(\"dall-e-3\"),\n                prompt\n            });\n            console.log(image);\n            if (isProd) {\n                // 2a. Production: upload to Vercel Blob Storage\n                const blob = await (0,_vercel_blob__WEBPACK_IMPORTED_MODULE_6__.put)(`images/${Date.now()}.png`, Buffer.from(image.base64, \"base64\"), {\n                    access: \"public\",\n                    contentType: \"image/png\"\n                });\n                imageUrl = blob.url;\n            } else {\n                // 2b. Development: save locally in /public/images\n                const fileName = `image-${Date.now()}.png`;\n                const filePath = path__WEBPACK_IMPORTED_MODULE_1___default().join(process.cwd(), \"public\", \"images\", fileName);\n                // Ensure /public/images exists\n                fs__WEBPACK_IMPORTED_MODULE_0___default().mkdirSync(path__WEBPACK_IMPORTED_MODULE_1___default().dirname(filePath), {\n                    recursive: true\n                });\n                // Save file\n                fs__WEBPACK_IMPORTED_MODULE_0___default().writeFileSync(filePath, Buffer.from(image.base64, \"base64\"));\n                imageUrl = `/images/${fileName}`;\n            // URL relative to your dev server\n            }\n            console.log(\"Generated image URL:\", imageUrl);\n            // 3. Return URL and prompt\n            return {\n                url: imageUrl,\n                prompt\n            };\n            return imageUrl;\n        } catch (error) {\n            console.error(\"Error generating image:\", error);\n            // Return consistent structure even on error\n            return \"Error generating images\";\n        }\n    }\n});\nconst tools = {\n    generateImage\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvdG9vbHMvZ2VuZXJhdGVJbWFnZS50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFvQjtBQUNJO0FBQ0E7QUFDZ0I7QUFDYztBQUNuQjtBQUVuQyxNQUFNTyxTQUFTQyxrQkFBeUI7QUFFakMsTUFBTUMsZ0JBQWdCSix3Q0FBSUEsQ0FBQztJQUNoQ0ssYUFBYTtJQUNiQyxhQUFhVCx1Q0FBUSxDQUFDO1FBQ3BCVyxRQUFRWCx1Q0FBUSxHQUFHYSxRQUFRLENBQUM7SUFDOUI7SUFDQUMsU0FBUyxPQUFPLEVBQUVILE1BQU0sRUFBRTtRQUN4QixJQUFJSSxXQUFtQixJQUFJLCtCQUErQjtRQUUxREMsUUFBUUMsR0FBRyxDQUFDO1FBRVosSUFBSTtZQUNGLG9DQUFvQztZQUNwQyxNQUFNLEVBQUVDLEtBQUssRUFBRSxHQUFHLE1BQU1oQiw4REFBMEJBLENBQUM7Z0JBQ2pEaUIsT0FBT2xCLGtEQUFNQSxDQUFDbUIsVUFBVSxDQUFDO2dCQUN6QlQ7WUFDRjtZQUVBSyxRQUFRQyxHQUFHLENBQUNDO1lBRVosSUFBSWIsUUFBUTtnQkFDVixnREFBZ0Q7Z0JBQ2hELE1BQU1nQixPQUFPLE1BQU1qQixpREFBR0EsQ0FDcEIsQ0FBQyxPQUFPLEVBQUVrQixLQUFLQyxHQUFHLEdBQUcsSUFBSSxDQUFDLEVBQzFCQyxPQUFPQyxJQUFJLENBQUNQLE1BQU1RLE1BQU0sRUFBRSxXQUMxQjtvQkFBRUMsUUFBUTtvQkFBVUMsYUFBYTtnQkFBWTtnQkFFL0NiLFdBQVdNLEtBQUtRLEdBQUc7WUFDckIsT0FBTztnQkFDTCxrREFBa0Q7Z0JBQ2xELE1BQU1DLFdBQVcsQ0FBQyxNQUFNLEVBQUVSLEtBQUtDLEdBQUcsR0FBRyxJQUFJLENBQUM7Z0JBQzFDLE1BQU1RLFdBQVdoQyxnREFBUyxDQUFDTyxRQUFRMkIsR0FBRyxJQUFJLFVBQVUsVUFBVUg7Z0JBRTlELCtCQUErQjtnQkFDL0JoQyxtREFBWSxDQUFDQyxtREFBWSxDQUFDZ0MsV0FBVztvQkFBRUssV0FBVztnQkFBSztnQkFFdkQsWUFBWTtnQkFDWnRDLHVEQUFnQixDQUFDaUMsVUFBVVAsT0FBT0MsSUFBSSxDQUFDUCxNQUFNUSxNQUFNLEVBQUU7Z0JBRXJEWCxXQUFXLENBQUMsUUFBUSxFQUFFZSxVQUFVO1lBQ2pDLGtDQUFrQztZQUNuQztZQUVBZCxRQUFRQyxHQUFHLENBQUMsd0JBQXdCRjtZQUVwQywyQkFBMkI7WUFDM0IsT0FBTztnQkFDTGMsS0FBS2Q7Z0JBQ0xKO1lBRUY7WUFDRixPQUFPSTtRQUVQLEVBQUUsT0FBT3VCLE9BQU87WUFDZHRCLFFBQVFzQixLQUFLLENBQUMsMkJBQTJCQTtZQUV6Qyw0Q0FBNEM7WUFDNUMsT0FBTztRQUNUO0lBQ0Y7QUFDRixHQUFHO0FBRUksTUFBTUMsUUFBUTtJQUFFaEM7QUFBYyxFQUFFIiwic291cmNlcyI6WyIvVXNlcnMvc2FsbWFuL0Rlc2t0b3AvY2hhdC1zbmFwLWdlbi9hcHAvdG9vbHMvZ2VuZXJhdGVJbWFnZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZnMgZnJvbSBcImZzXCI7XG5pbXBvcnQgcGF0aCBmcm9tIFwicGF0aFwiO1xuaW1wb3J0IHsgeiB9IGZyb20gXCJ6b2RcIjtcbmltcG9ydCB7IG9wZW5haSB9IGZyb20gXCJAYWktc2RrL29wZW5haVwiO1xuaW1wb3J0IHsgZXhwZXJpbWVudGFsX2dlbmVyYXRlSW1hZ2UsIHRvb2wgfSBmcm9tIFwiYWlcIjtcbmltcG9ydCB7IHB1dCB9IGZyb20gXCJAdmVyY2VsL2Jsb2JcIjtcblxuY29uc3QgaXNQcm9kID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwicHJvZHVjdGlvblwiO1xuXG5leHBvcnQgY29uc3QgZ2VuZXJhdGVJbWFnZSA9IHRvb2woe1xuICBkZXNjcmlwdGlvbjogXCJHZW5lcmF0ZSBhbiBpbWFnZVwiLFxuICBpbnB1dFNjaGVtYTogei5vYmplY3Qoe1xuICAgIHByb21wdDogei5zdHJpbmcoKS5kZXNjcmliZShcIlRoZSBwcm9tcHQgdG8gZ2VuZXJhdGUgdGhlIGltYWdlIGZyb21cIiksXG4gIH0pLFxuICBleGVjdXRlOiBhc3luYyAoeyBwcm9tcHQgfSkgPT4ge1xuICAgIGxldCBpbWFnZVVybDogc3RyaW5nID0gXCJcIjsgLy8gSW5pdGlhbGl6ZSBvdXRzaWRlIHRyeSBibG9ja1xuXG4gICAgY29uc29sZS5sb2coXCJ0b29sIGNhbGxlZCBcIilcbiAgICBcbiAgICB0cnkge1xuICAgICAgLy8gMS4gR2VuZXJhdGUgdGhlIGltYWdlIGZyb20gT3BlbkFJXG4gICAgICBjb25zdCB7IGltYWdlIH0gPSBhd2FpdCBleHBlcmltZW50YWxfZ2VuZXJhdGVJbWFnZSh7XG4gICAgICAgIG1vZGVsOiBvcGVuYWkuaW1hZ2VNb2RlbChcImRhbGwtZS0zXCIpLFxuICAgICAgICBwcm9tcHQsXG4gICAgICB9KTtcblxuICAgICAgY29uc29sZS5sb2coaW1hZ2UpXG5cbiAgICAgIGlmIChpc1Byb2QpIHtcbiAgICAgICAgLy8gMmEuIFByb2R1Y3Rpb246IHVwbG9hZCB0byBWZXJjZWwgQmxvYiBTdG9yYWdlXG4gICAgICAgIGNvbnN0IGJsb2IgPSBhd2FpdCBwdXQoXG4gICAgICAgICAgYGltYWdlcy8ke0RhdGUubm93KCl9LnBuZ2AsXG4gICAgICAgICAgQnVmZmVyLmZyb20oaW1hZ2UuYmFzZTY0LCBcImJhc2U2NFwiKSxcbiAgICAgICAgICB7IGFjY2VzczogXCJwdWJsaWNcIiwgY29udGVudFR5cGU6IFwiaW1hZ2UvcG5nXCIgfVxuICAgICAgICApO1xuICAgICAgICBpbWFnZVVybCA9IGJsb2IudXJsO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gMmIuIERldmVsb3BtZW50OiBzYXZlIGxvY2FsbHkgaW4gL3B1YmxpYy9pbWFnZXNcbiAgICAgICAgY29uc3QgZmlsZU5hbWUgPSBgaW1hZ2UtJHtEYXRlLm5vdygpfS5wbmdgO1xuICAgICAgICBjb25zdCBmaWxlUGF0aCA9IHBhdGguam9pbihwcm9jZXNzLmN3ZCgpLCBcInB1YmxpY1wiLCBcImltYWdlc1wiLCBmaWxlTmFtZSk7XG5cbiAgICAgICAgLy8gRW5zdXJlIC9wdWJsaWMvaW1hZ2VzIGV4aXN0c1xuICAgICAgICBmcy5ta2RpclN5bmMocGF0aC5kaXJuYW1lKGZpbGVQYXRoKSwgeyByZWN1cnNpdmU6IHRydWUgfSk7XG5cbiAgICAgICAgLy8gU2F2ZSBmaWxlXG4gICAgICAgIGZzLndyaXRlRmlsZVN5bmMoZmlsZVBhdGgsIEJ1ZmZlci5mcm9tKGltYWdlLmJhc2U2NCwgXCJiYXNlNjRcIikpO1xuXG4gICAgICAgIGltYWdlVXJsID0gYC9pbWFnZXMvJHtmaWxlTmFtZX1gOyBcbiAgICAgICAvLyBVUkwgcmVsYXRpdmUgdG8geW91ciBkZXYgc2VydmVyXG4gICAgICB9XG5cbiAgICAgIGNvbnNvbGUubG9nKFwiR2VuZXJhdGVkIGltYWdlIFVSTDpcIiwgaW1hZ2VVcmwpO1xuICAgICAgXG4gICAgICAvLyAzLiBSZXR1cm4gVVJMIGFuZCBwcm9tcHRcbiAgICAgIHJldHVybiB7IFxuICAgICAgICB1cmw6IGltYWdlVXJsLCBcbiAgICAgICAgcHJvbXB0XG4gICAgICAgIFxuICAgICAgfTtcbiAgICByZXR1cm4gaW1hZ2VVcmw7XG4gICAgICBcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIGdlbmVyYXRpbmcgaW1hZ2U6XCIsIGVycm9yKTtcbiAgICAgIFxuICAgICAgLy8gUmV0dXJuIGNvbnNpc3RlbnQgc3RydWN0dXJlIGV2ZW4gb24gZXJyb3JcbiAgICAgIHJldHVybiBcIkVycm9yIGdlbmVyYXRpbmcgaW1hZ2VzXCJcbiAgICB9XG4gIH0sXG59KTtcblxuZXhwb3J0IGNvbnN0IHRvb2xzID0geyBnZW5lcmF0ZUltYWdlIH07Il0sIm5hbWVzIjpbImZzIiwicGF0aCIsInoiLCJvcGVuYWkiLCJleHBlcmltZW50YWxfZ2VuZXJhdGVJbWFnZSIsInRvb2wiLCJwdXQiLCJpc1Byb2QiLCJwcm9jZXNzIiwiZ2VuZXJhdGVJbWFnZSIsImRlc2NyaXB0aW9uIiwiaW5wdXRTY2hlbWEiLCJvYmplY3QiLCJwcm9tcHQiLCJzdHJpbmciLCJkZXNjcmliZSIsImV4ZWN1dGUiLCJpbWFnZVVybCIsImNvbnNvbGUiLCJsb2ciLCJpbWFnZSIsIm1vZGVsIiwiaW1hZ2VNb2RlbCIsImJsb2IiLCJEYXRlIiwibm93IiwiQnVmZmVyIiwiZnJvbSIsImJhc2U2NCIsImFjY2VzcyIsImNvbnRlbnRUeXBlIiwidXJsIiwiZmlsZU5hbWUiLCJmaWxlUGF0aCIsImpvaW4iLCJjd2QiLCJta2RpclN5bmMiLCJkaXJuYW1lIiwicmVjdXJzaXZlIiwid3JpdGVGaWxlU3luYyIsImVycm9yIiwidG9vbHMiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./app/tools/generateImage.ts\n");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fchat%2Froute&page=%2Fapi%2Fchat%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fchat%2Froute.ts&appDir=%2FUsers%2Fsalman%2FDesktop%2Fchat-snap-gen%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fsalman%2FDesktop%2Fchat-snap-gen&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D&isGlobalNotFoundEnabled=!":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fchat%2Froute&page=%2Fapi%2Fchat%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fchat%2Froute.ts&appDir=%2FUsers%2Fsalman%2FDesktop%2Fchat-snap-gen%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fsalman%2FDesktop%2Fchat-snap-gen&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D&isGlobalNotFoundEnabled=! ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   handler: () => (/* binding */ handler),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   workAsyncStorage: () => (/* binding */ workAsyncStorage),\n/* harmony export */   workUnitAsyncStorage: () => (/* binding */ workUnitAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/route-kind */ \"(rsc)/./node_modules/next/dist/server/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_dist_server_request_meta__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/dist/server/request-meta */ \"(rsc)/./node_modules/next/dist/server/request-meta.js\");\n/* harmony import */ var next_dist_server_request_meta__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_request_meta__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_dist_server_lib_trace_tracer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/dist/server/lib/trace/tracer */ \"(rsc)/./node_modules/next/dist/server/lib/trace/tracer.js\");\n/* harmony import */ var next_dist_server_lib_trace_tracer__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_trace_tracer__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_dist_shared_lib_router_utils_app_paths__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/dist/shared/lib/router/utils/app-paths */ \"next/dist/shared/lib/router/utils/app-paths\");\n/* harmony import */ var next_dist_shared_lib_router_utils_app_paths__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_dist_shared_lib_router_utils_app_paths__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var next_dist_server_base_http_node__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/dist/server/base-http/node */ \"(rsc)/./node_modules/next/dist/server/base-http/node.js\");\n/* harmony import */ var next_dist_server_base_http_node__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_base_http_node__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var next_dist_server_web_spec_extension_adapters_next_request__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/dist/server/web/spec-extension/adapters/next-request */ \"(rsc)/./node_modules/next/dist/server/web/spec-extension/adapters/next-request.js\");\n/* harmony import */ var next_dist_server_web_spec_extension_adapters_next_request__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_web_spec_extension_adapters_next_request__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var next_dist_server_lib_trace_constants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/dist/server/lib/trace/constants */ \"(rsc)/./node_modules/next/dist/server/lib/trace/constants.js\");\n/* harmony import */ var next_dist_server_lib_trace_constants__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_trace_constants__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var next_dist_server_instrumentation_utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/dist/server/instrumentation/utils */ \"(rsc)/./node_modules/next/dist/server/instrumentation/utils.js\");\n/* harmony import */ var next_dist_server_send_response__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next/dist/server/send-response */ \"(rsc)/./node_modules/next/dist/server/send-response.js\");\n/* harmony import */ var next_dist_server_web_utils__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! next/dist/server/web/utils */ \"(rsc)/./node_modules/next/dist/server/web/utils.js\");\n/* harmony import */ var next_dist_server_web_utils__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_web_utils__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var next_dist_server_lib_cache_control__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! next/dist/server/lib/cache-control */ \"(rsc)/./node_modules/next/dist/server/lib/cache-control.js\");\n/* harmony import */ var next_dist_lib_constants__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! next/dist/lib/constants */ \"(rsc)/./node_modules/next/dist/lib/constants.js\");\n/* harmony import */ var next_dist_lib_constants__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(next_dist_lib_constants__WEBPACK_IMPORTED_MODULE_13__);\n/* harmony import */ var next_dist_shared_lib_no_fallback_error_external__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! next/dist/shared/lib/no-fallback-error.external */ \"next/dist/shared/lib/no-fallback-error.external\");\n/* harmony import */ var next_dist_shared_lib_no_fallback_error_external__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(next_dist_shared_lib_no_fallback_error_external__WEBPACK_IMPORTED_MODULE_14__);\n/* harmony import */ var next_dist_server_response_cache__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! next/dist/server/response-cache */ \"(rsc)/./node_modules/next/dist/server/response-cache/index.js\");\n/* harmony import */ var next_dist_server_response_cache__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_response_cache__WEBPACK_IMPORTED_MODULE_15__);\n/* harmony import */ var _Users_salman_Desktop_chat_snap_gen_app_api_chat_route_ts__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./app/api/chat/route.ts */ \"(rsc)/./app/api/chat/route.ts\");\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/chat/route\",\n        pathname: \"/api/chat\",\n        filename: \"route\",\n        bundlePath: \"app/api/chat/route\"\n    },\n    distDir: \".next\" || 0,\n    projectDir:  false || '',\n    resolvedPagePath: \"/Users/salman/Desktop/chat-snap-gen/app/api/chat/route.ts\",\n    nextConfigOutput,\n    userland: _Users_salman_Desktop_chat_snap_gen_app_api_chat_route_ts__WEBPACK_IMPORTED_MODULE_16__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { workAsyncStorage, workUnitAsyncStorage, serverHooks } = routeModule;\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        workAsyncStorage,\n        workUnitAsyncStorage\n    });\n}\n\nasync function handler(req, res, ctx) {\n    var _nextConfig_experimental;\n    let srcPage = \"/api/chat/route\";\n    // turbopack doesn't normalize `/index` in the page name\n    // so we need to to process dynamic routes properly\n    // TODO: fix turbopack providing differing value from webpack\n    if (false) {} else if (srcPage === '/index') {\n        // we always normalize /index specifically\n        srcPage = '/';\n    }\n    const multiZoneDraftMode = \"false\";\n    const prepareResult = await routeModule.prepare(req, res, {\n        srcPage,\n        multiZoneDraftMode\n    });\n    if (!prepareResult) {\n        res.statusCode = 400;\n        res.end('Bad Request');\n        ctx.waitUntil == null ? void 0 : ctx.waitUntil.call(ctx, Promise.resolve());\n        return null;\n    }\n    const { buildId, params, nextConfig, isDraftMode, prerenderManifest, routerServerContext, isOnDemandRevalidate, revalidateOnlyGenerated, resolvedPathname } = prepareResult;\n    const normalizedSrcPage = (0,next_dist_shared_lib_router_utils_app_paths__WEBPACK_IMPORTED_MODULE_5__.normalizeAppPath)(srcPage);\n    let isIsr = Boolean(prerenderManifest.dynamicRoutes[normalizedSrcPage] || prerenderManifest.routes[resolvedPathname]);\n    if (isIsr && !isDraftMode) {\n        const isPrerendered = Boolean(prerenderManifest.routes[resolvedPathname]);\n        const prerenderInfo = prerenderManifest.dynamicRoutes[normalizedSrcPage];\n        if (prerenderInfo) {\n            if (prerenderInfo.fallback === false && !isPrerendered) {\n                throw new next_dist_shared_lib_no_fallback_error_external__WEBPACK_IMPORTED_MODULE_14__.NoFallbackError();\n            }\n        }\n    }\n    let cacheKey = null;\n    if (isIsr && !routeModule.isDev && !isDraftMode) {\n        cacheKey = resolvedPathname;\n        // ensure /index and / is normalized to one key\n        cacheKey = cacheKey === '/index' ? '/' : cacheKey;\n    }\n    const supportsDynamicResponse = // If we're in development, we always support dynamic HTML\n    routeModule.isDev === true || // If this is not SSG or does not have static paths, then it supports\n    // dynamic HTML.\n    !isIsr;\n    // This is a revalidation request if the request is for a static\n    // page and it is not being resumed from a postponed render and\n    // it is not a dynamic RSC request then it is a revalidation\n    // request.\n    const isRevalidate = isIsr && !supportsDynamicResponse;\n    const method = req.method || 'GET';\n    const tracer = (0,next_dist_server_lib_trace_tracer__WEBPACK_IMPORTED_MODULE_4__.getTracer)();\n    const activeSpan = tracer.getActiveScopeSpan();\n    const context = {\n        params,\n        prerenderManifest,\n        renderOpts: {\n            experimental: {\n                dynamicIO: Boolean(nextConfig.experimental.dynamicIO),\n                authInterrupts: Boolean(nextConfig.experimental.authInterrupts)\n            },\n            supportsDynamicResponse,\n            incrementalCache: (0,next_dist_server_request_meta__WEBPACK_IMPORTED_MODULE_3__.getRequestMeta)(req, 'incrementalCache'),\n            cacheLifeProfiles: (_nextConfig_experimental = nextConfig.experimental) == null ? void 0 : _nextConfig_experimental.cacheLife,\n            isRevalidate,\n            waitUntil: ctx.waitUntil,\n            onClose: (cb)=>{\n                res.on('close', cb);\n            },\n            onAfterTaskError: undefined,\n            onInstrumentationRequestError: (error, _request, errorContext)=>routeModule.onRequestError(req, error, errorContext, routerServerContext)\n        },\n        sharedContext: {\n            buildId\n        }\n    };\n    const nodeNextReq = new next_dist_server_base_http_node__WEBPACK_IMPORTED_MODULE_6__.NodeNextRequest(req);\n    const nodeNextRes = new next_dist_server_base_http_node__WEBPACK_IMPORTED_MODULE_6__.NodeNextResponse(res);\n    const nextReq = next_dist_server_web_spec_extension_adapters_next_request__WEBPACK_IMPORTED_MODULE_7__.NextRequestAdapter.fromNodeNextRequest(nodeNextReq, (0,next_dist_server_web_spec_extension_adapters_next_request__WEBPACK_IMPORTED_MODULE_7__.signalFromNodeResponse)(res));\n    try {\n        const invokeRouteModule = async (span)=>{\n            return routeModule.handle(nextReq, context).finally(()=>{\n                if (!span) return;\n                span.setAttributes({\n                    'http.status_code': res.statusCode,\n                    'next.rsc': false\n                });\n                const rootSpanAttributes = tracer.getRootSpanAttributes();\n                // We were unable to get attributes, probably OTEL is not enabled\n                if (!rootSpanAttributes) {\n                    return;\n                }\n                if (rootSpanAttributes.get('next.span_type') !== next_dist_server_lib_trace_constants__WEBPACK_IMPORTED_MODULE_8__.BaseServerSpan.handleRequest) {\n                    console.warn(`Unexpected root span type '${rootSpanAttributes.get('next.span_type')}'. Please report this Next.js issue https://github.com/vercel/next.js`);\n                    return;\n                }\n                const route = rootSpanAttributes.get('next.route');\n                if (route) {\n                    const name = `${method} ${route}`;\n                    span.setAttributes({\n                        'next.route': route,\n                        'http.route': route,\n                        'next.span_name': name\n                    });\n                    span.updateName(name);\n                } else {\n                    span.updateName(`${method} ${req.url}`);\n                }\n            });\n        };\n        const handleResponse = async (currentSpan)=>{\n            var _cacheEntry_value;\n            const responseGenerator = async ({ previousCacheEntry })=>{\n                try {\n                    if (!(0,next_dist_server_request_meta__WEBPACK_IMPORTED_MODULE_3__.getRequestMeta)(req, 'minimalMode') && isOnDemandRevalidate && revalidateOnlyGenerated && !previousCacheEntry) {\n                        res.statusCode = 404;\n                        // on-demand revalidate always sets this header\n                        res.setHeader('x-nextjs-cache', 'REVALIDATED');\n                        res.end('This page could not be found');\n                        return null;\n                    }\n                    const response = await invokeRouteModule(currentSpan);\n                    req.fetchMetrics = context.renderOpts.fetchMetrics;\n                    let pendingWaitUntil = context.renderOpts.pendingWaitUntil;\n                    // Attempt using provided waitUntil if available\n                    // if it's not we fallback to sendResponse's handling\n                    if (pendingWaitUntil) {\n                        if (ctx.waitUntil) {\n                            ctx.waitUntil(pendingWaitUntil);\n                            pendingWaitUntil = undefined;\n                        }\n                    }\n                    const cacheTags = context.renderOpts.collectedTags;\n                    // If the request is for a static response, we can cache it so long\n                    // as it's not edge.\n                    if (isIsr) {\n                        const blob = await response.blob();\n                        // Copy the headers from the response.\n                        const headers = (0,next_dist_server_web_utils__WEBPACK_IMPORTED_MODULE_11__.toNodeOutgoingHttpHeaders)(response.headers);\n                        if (cacheTags) {\n                            headers[next_dist_lib_constants__WEBPACK_IMPORTED_MODULE_13__.NEXT_CACHE_TAGS_HEADER] = cacheTags;\n                        }\n                        if (!headers['content-type'] && blob.type) {\n                            headers['content-type'] = blob.type;\n                        }\n                        const revalidate = typeof context.renderOpts.collectedRevalidate === 'undefined' || context.renderOpts.collectedRevalidate >= next_dist_lib_constants__WEBPACK_IMPORTED_MODULE_13__.INFINITE_CACHE ? false : context.renderOpts.collectedRevalidate;\n                        const expire = typeof context.renderOpts.collectedExpire === 'undefined' || context.renderOpts.collectedExpire >= next_dist_lib_constants__WEBPACK_IMPORTED_MODULE_13__.INFINITE_CACHE ? undefined : context.renderOpts.collectedExpire;\n                        // Create the cache entry for the response.\n                        const cacheEntry = {\n                            value: {\n                                kind: next_dist_server_response_cache__WEBPACK_IMPORTED_MODULE_15__.CachedRouteKind.APP_ROUTE,\n                                status: response.status,\n                                body: Buffer.from(await blob.arrayBuffer()),\n                                headers\n                            },\n                            cacheControl: {\n                                revalidate,\n                                expire\n                            }\n                        };\n                        return cacheEntry;\n                    } else {\n                        // send response without caching if not ISR\n                        await (0,next_dist_server_send_response__WEBPACK_IMPORTED_MODULE_10__.sendResponse)(nodeNextReq, nodeNextRes, response, context.renderOpts.pendingWaitUntil);\n                        return null;\n                    }\n                } catch (err) {\n                    // if this is a background revalidate we need to report\n                    // the request error here as it won't be bubbled\n                    if (previousCacheEntry == null ? void 0 : previousCacheEntry.isStale) {\n                        await routeModule.onRequestError(req, err, {\n                            routerKind: 'App Router',\n                            routePath: srcPage,\n                            routeType: 'route',\n                            revalidateReason: (0,next_dist_server_instrumentation_utils__WEBPACK_IMPORTED_MODULE_9__.getRevalidateReason)({\n                                isRevalidate,\n                                isOnDemandRevalidate\n                            })\n                        }, routerServerContext);\n                    }\n                    throw err;\n                }\n            };\n            const cacheEntry = await routeModule.handleResponse({\n                req,\n                nextConfig,\n                cacheKey,\n                routeKind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n                isFallback: false,\n                prerenderManifest,\n                isRoutePPREnabled: false,\n                isOnDemandRevalidate,\n                revalidateOnlyGenerated,\n                responseGenerator,\n                waitUntil: ctx.waitUntil\n            });\n            // we don't create a cacheEntry for ISR\n            if (!isIsr) {\n                return null;\n            }\n            if ((cacheEntry == null ? void 0 : (_cacheEntry_value = cacheEntry.value) == null ? void 0 : _cacheEntry_value.kind) !== next_dist_server_response_cache__WEBPACK_IMPORTED_MODULE_15__.CachedRouteKind.APP_ROUTE) {\n                var _cacheEntry_value1;\n                throw Object.defineProperty(new Error(`Invariant: app-route received invalid cache entry ${cacheEntry == null ? void 0 : (_cacheEntry_value1 = cacheEntry.value) == null ? void 0 : _cacheEntry_value1.kind}`), \"__NEXT_ERROR_CODE\", {\n                    value: \"E701\",\n                    enumerable: false,\n                    configurable: true\n                });\n            }\n            if (!(0,next_dist_server_request_meta__WEBPACK_IMPORTED_MODULE_3__.getRequestMeta)(req, 'minimalMode')) {\n                res.setHeader('x-nextjs-cache', isOnDemandRevalidate ? 'REVALIDATED' : cacheEntry.isMiss ? 'MISS' : cacheEntry.isStale ? 'STALE' : 'HIT');\n            }\n            // Draft mode should never be cached\n            if (isDraftMode) {\n                res.setHeader('Cache-Control', 'private, no-cache, no-store, max-age=0, must-revalidate');\n            }\n            const headers = (0,next_dist_server_web_utils__WEBPACK_IMPORTED_MODULE_11__.fromNodeOutgoingHttpHeaders)(cacheEntry.value.headers);\n            if (!((0,next_dist_server_request_meta__WEBPACK_IMPORTED_MODULE_3__.getRequestMeta)(req, 'minimalMode') && isIsr)) {\n                headers.delete(next_dist_lib_constants__WEBPACK_IMPORTED_MODULE_13__.NEXT_CACHE_TAGS_HEADER);\n            }\n            // If cache control is already set on the response we don't\n            // override it to allow users to customize it via next.config\n            if (cacheEntry.cacheControl && !res.getHeader('Cache-Control') && !headers.get('Cache-Control')) {\n                headers.set('Cache-Control', (0,next_dist_server_lib_cache_control__WEBPACK_IMPORTED_MODULE_12__.getCacheControlHeader)(cacheEntry.cacheControl));\n            }\n            await (0,next_dist_server_send_response__WEBPACK_IMPORTED_MODULE_10__.sendResponse)(nodeNextReq, nodeNextRes, new Response(cacheEntry.value.body, {\n                headers,\n                status: cacheEntry.value.status || 200\n            }));\n            return null;\n        };\n        // TODO: activeSpan code path is for when wrapped by\n        // next-server can be removed when this is no longer used\n        if (activeSpan) {\n            await handleResponse(activeSpan);\n        } else {\n            await tracer.withPropagatedContext(req.headers, ()=>tracer.trace(next_dist_server_lib_trace_constants__WEBPACK_IMPORTED_MODULE_8__.BaseServerSpan.handleRequest, {\n                    spanName: `${method} ${req.url}`,\n                    kind: next_dist_server_lib_trace_tracer__WEBPACK_IMPORTED_MODULE_4__.SpanKind.SERVER,\n                    attributes: {\n                        'http.method': method,\n                        'http.target': req.url\n                    }\n                }, handleResponse));\n        }\n    } catch (err) {\n        // if we aren't wrapped by base-server handle here\n        if (!activeSpan && !(err instanceof next_dist_shared_lib_no_fallback_error_external__WEBPACK_IMPORTED_MODULE_14__.NoFallbackError)) {\n            await routeModule.onRequestError(req, err, {\n                routerKind: 'App Router',\n                routePath: normalizedSrcPage,\n                routeType: 'route',\n                revalidateReason: (0,next_dist_server_instrumentation_utils__WEBPACK_IMPORTED_MODULE_9__.getRevalidateReason)({\n                    isRevalidate,\n                    isOnDemandRevalidate\n                })\n            });\n        }\n        // rethrow so that we can handle serving error page\n        // If this is during static generation, throw the error again.\n        if (isIsr) throw err;\n        // Otherwise, send a 500 response.\n        await (0,next_dist_server_send_response__WEBPACK_IMPORTED_MODULE_10__.sendResponse)(nodeNextReq, nodeNextRes, new Response(null, {\n            status: 500\n        }));\n        return null;\n    }\n}\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIvaW5kZXguanM/bmFtZT1hcHAlMkZhcGklMkZjaGF0JTJGcm91dGUmcGFnZT0lMkZhcGklMkZjaGF0JTJGcm91dGUmYXBwUGF0aHM9JnBhZ2VQYXRoPXByaXZhdGUtbmV4dC1hcHAtZGlyJTJGYXBpJTJGY2hhdCUyRnJvdXRlLnRzJmFwcERpcj0lMkZVc2VycyUyRnNhbG1hbiUyRkRlc2t0b3AlMkZjaGF0LXNuYXAtZ2VuJTJGYXBwJnBhZ2VFeHRlbnNpb25zPXRzeCZwYWdlRXh0ZW5zaW9ucz10cyZwYWdlRXh0ZW5zaW9ucz1qc3gmcGFnZUV4dGVuc2lvbnM9anMmcm9vdERpcj0lMkZVc2VycyUyRnNhbG1hbiUyRkRlc2t0b3AlMkZjaGF0LXNuYXAtZ2VuJmlzRGV2PXRydWUmdHNjb25maWdQYXRoPXRzY29uZmlnLmpzb24mYmFzZVBhdGg9JmFzc2V0UHJlZml4PSZuZXh0Q29uZmlnT3V0cHV0PSZwcmVmZXJyZWRSZWdpb249Jm1pZGRsZXdhcmVDb25maWc9ZTMwJTNEJmlzR2xvYmFsTm90Rm91bmRFbmFibGVkPSEiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBK0Y7QUFDdkM7QUFDcUI7QUFDZDtBQUNTO0FBQ087QUFDSztBQUNtQztBQUNqRDtBQUNPO0FBQ2Y7QUFDc0M7QUFDekI7QUFDTTtBQUNDO0FBQ2hCO0FBQ29CO0FBQ3RGO0FBQ0E7QUFDQTtBQUNBLHdCQUF3Qix5R0FBbUI7QUFDM0M7QUFDQSxjQUFjLGtFQUFTO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLGFBQWEsT0FBb0MsSUFBSSxDQUFFO0FBQ3ZELGdCQUFnQixNQUF1QztBQUN2RDtBQUNBO0FBQ0EsWUFBWTtBQUNaLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxRQUFRLHNEQUFzRDtBQUM5RDtBQUNBLFdBQVcsNEVBQVc7QUFDdEI7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUMwRjtBQUNuRjtBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLEtBQXFCLEVBQUUsRUFFMUIsQ0FBQztBQUNOO0FBQ0E7QUFDQTtBQUNBLCtCQUErQixPQUF3QztBQUN2RTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxvSkFBb0o7QUFDaEssOEJBQThCLDZGQUFnQjtBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsNkZBQWU7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsNEVBQVM7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBLDhCQUE4Qiw2RUFBYztBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsNEVBQWU7QUFDM0MsNEJBQTRCLDZFQUFnQjtBQUM1QyxvQkFBb0IseUdBQWtCLGtDQUFrQyxpSEFBc0I7QUFDOUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFpRSxnRkFBYztBQUMvRSwrREFBK0QseUNBQXlDO0FBQ3hHO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0NBQW9DLFFBQVEsRUFBRSxNQUFNO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0Esa0JBQWtCO0FBQ2xCLHVDQUF1QyxRQUFRLEVBQUUsUUFBUTtBQUN6RDtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSwrQ0FBK0Msb0JBQW9CO0FBQ25FO0FBQ0EseUJBQXlCLDZFQUFjO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3Q0FBd0Msc0ZBQXlCO0FBQ2pFO0FBQ0Esb0NBQW9DLDRFQUFzQjtBQUMxRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNKQUFzSixvRUFBYztBQUNwSywwSUFBMEksb0VBQWM7QUFDeEo7QUFDQTtBQUNBO0FBQ0Esc0NBQXNDLDZFQUFlO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QjtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0I7QUFDdEI7QUFDQSw4QkFBOEIsNkVBQVk7QUFDMUM7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhDQUE4QywyRkFBbUI7QUFDakU7QUFDQTtBQUNBLDZCQUE2QjtBQUM3Qix5QkFBeUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQixrRUFBUztBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFJQUFxSSw2RUFBZTtBQUNwSjtBQUNBLDJHQUEyRyxpSEFBaUg7QUFDNU47QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0EsaUJBQWlCLDZFQUFjO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0Qix3RkFBMkI7QUFDdkQsa0JBQWtCLDZFQUFjO0FBQ2hDLCtCQUErQiw0RUFBc0I7QUFDckQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2Q0FBNkMsMEZBQXFCO0FBQ2xFO0FBQ0Esa0JBQWtCLDZFQUFZO0FBQzlCO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLDZFQUE2RSxnRkFBYztBQUMzRixpQ0FBaUMsUUFBUSxFQUFFLFFBQVE7QUFDbkQsMEJBQTBCLHVFQUFRO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsNENBQTRDLDZGQUFlO0FBQzNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDLDJGQUFtQjtBQUNyRDtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYyw2RUFBWTtBQUMxQjtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7O0FBRUEiLCJzb3VyY2VzIjpbIiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcHBSb3V0ZVJvdXRlTW9kdWxlIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvcm91dGUtbW9kdWxlcy9hcHAtcm91dGUvbW9kdWxlLmNvbXBpbGVkXCI7XG5pbXBvcnQgeyBSb3V0ZUtpbmQgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9yb3V0ZS1raW5kXCI7XG5pbXBvcnQgeyBwYXRjaEZldGNoIGFzIF9wYXRjaEZldGNoIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvbGliL3BhdGNoLWZldGNoXCI7XG5pbXBvcnQgeyBnZXRSZXF1ZXN0TWV0YSB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL3JlcXVlc3QtbWV0YVwiO1xuaW1wb3J0IHsgZ2V0VHJhY2VyLCBTcGFuS2luZCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2xpYi90cmFjZS90cmFjZXJcIjtcbmltcG9ydCB7IG5vcm1hbGl6ZUFwcFBhdGggfSBmcm9tIFwibmV4dC9kaXN0L3NoYXJlZC9saWIvcm91dGVyL3V0aWxzL2FwcC1wYXRoc1wiO1xuaW1wb3J0IHsgTm9kZU5leHRSZXF1ZXN0LCBOb2RlTmV4dFJlc3BvbnNlIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvYmFzZS1odHRwL25vZGVcIjtcbmltcG9ydCB7IE5leHRSZXF1ZXN0QWRhcHRlciwgc2lnbmFsRnJvbU5vZGVSZXNwb25zZSB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL3dlYi9zcGVjLWV4dGVuc2lvbi9hZGFwdGVycy9uZXh0LXJlcXVlc3RcIjtcbmltcG9ydCB7IEJhc2VTZXJ2ZXJTcGFuIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvbGliL3RyYWNlL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgZ2V0UmV2YWxpZGF0ZVJlYXNvbiB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2luc3RydW1lbnRhdGlvbi91dGlsc1wiO1xuaW1wb3J0IHsgc2VuZFJlc3BvbnNlIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvc2VuZC1yZXNwb25zZVwiO1xuaW1wb3J0IHsgZnJvbU5vZGVPdXRnb2luZ0h0dHBIZWFkZXJzLCB0b05vZGVPdXRnb2luZ0h0dHBIZWFkZXJzIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvd2ViL3V0aWxzXCI7XG5pbXBvcnQgeyBnZXRDYWNoZUNvbnRyb2xIZWFkZXIgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9saWIvY2FjaGUtY29udHJvbFwiO1xuaW1wb3J0IHsgSU5GSU5JVEVfQ0FDSEUsIE5FWFRfQ0FDSEVfVEFHU19IRUFERVIgfSBmcm9tIFwibmV4dC9kaXN0L2xpYi9jb25zdGFudHNcIjtcbmltcG9ydCB7IE5vRmFsbGJhY2tFcnJvciB9IGZyb20gXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9uby1mYWxsYmFjay1lcnJvci5leHRlcm5hbFwiO1xuaW1wb3J0IHsgQ2FjaGVkUm91dGVLaW5kIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvcmVzcG9uc2UtY2FjaGVcIjtcbmltcG9ydCAqIGFzIHVzZXJsYW5kIGZyb20gXCIvVXNlcnMvc2FsbWFuL0Rlc2t0b3AvY2hhdC1zbmFwLWdlbi9hcHAvYXBpL2NoYXQvcm91dGUudHNcIjtcbi8vIFdlIGluamVjdCB0aGUgbmV4dENvbmZpZ091dHB1dCBoZXJlIHNvIHRoYXQgd2UgY2FuIHVzZSB0aGVtIGluIHRoZSByb3V0ZVxuLy8gbW9kdWxlLlxuY29uc3QgbmV4dENvbmZpZ091dHB1dCA9IFwiXCJcbmNvbnN0IHJvdXRlTW9kdWxlID0gbmV3IEFwcFJvdXRlUm91dGVNb2R1bGUoe1xuICAgIGRlZmluaXRpb246IHtcbiAgICAgICAga2luZDogUm91dGVLaW5kLkFQUF9ST1VURSxcbiAgICAgICAgcGFnZTogXCIvYXBpL2NoYXQvcm91dGVcIixcbiAgICAgICAgcGF0aG5hbWU6IFwiL2FwaS9jaGF0XCIsXG4gICAgICAgIGZpbGVuYW1lOiBcInJvdXRlXCIsXG4gICAgICAgIGJ1bmRsZVBhdGg6IFwiYXBwL2FwaS9jaGF0L3JvdXRlXCJcbiAgICB9LFxuICAgIGRpc3REaXI6IHByb2Nlc3MuZW52Ll9fTkVYVF9SRUxBVElWRV9ESVNUX0RJUiB8fCAnJyxcbiAgICBwcm9qZWN0RGlyOiBwcm9jZXNzLmVudi5fX05FWFRfUkVMQVRJVkVfUFJPSkVDVF9ESVIgfHwgJycsXG4gICAgcmVzb2x2ZWRQYWdlUGF0aDogXCIvVXNlcnMvc2FsbWFuL0Rlc2t0b3AvY2hhdC1zbmFwLWdlbi9hcHAvYXBpL2NoYXQvcm91dGUudHNcIixcbiAgICBuZXh0Q29uZmlnT3V0cHV0LFxuICAgIHVzZXJsYW5kXG59KTtcbi8vIFB1bGwgb3V0IHRoZSBleHBvcnRzIHRoYXQgd2UgbmVlZCB0byBleHBvc2UgZnJvbSB0aGUgbW9kdWxlLiBUaGlzIHNob3VsZFxuLy8gYmUgZWxpbWluYXRlZCB3aGVuIHdlJ3ZlIG1vdmVkIHRoZSBvdGhlciByb3V0ZXMgdG8gdGhlIG5ldyBmb3JtYXQuIFRoZXNlXG4vLyBhcmUgdXNlZCB0byBob29rIGludG8gdGhlIHJvdXRlLlxuY29uc3QgeyB3b3JrQXN5bmNTdG9yYWdlLCB3b3JrVW5pdEFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MgfSA9IHJvdXRlTW9kdWxlO1xuZnVuY3Rpb24gcGF0Y2hGZXRjaCgpIHtcbiAgICByZXR1cm4gX3BhdGNoRmV0Y2goe1xuICAgICAgICB3b3JrQXN5bmNTdG9yYWdlLFxuICAgICAgICB3b3JrVW5pdEFzeW5jU3RvcmFnZVxuICAgIH0pO1xufVxuZXhwb3J0IHsgcm91dGVNb2R1bGUsIHdvcmtBc3luY1N0b3JhZ2UsIHdvcmtVbml0QXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcywgcGF0Y2hGZXRjaCwgIH07XG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihyZXEsIHJlcywgY3R4KSB7XG4gICAgdmFyIF9uZXh0Q29uZmlnX2V4cGVyaW1lbnRhbDtcbiAgICBsZXQgc3JjUGFnZSA9IFwiL2FwaS9jaGF0L3JvdXRlXCI7XG4gICAgLy8gdHVyYm9wYWNrIGRvZXNuJ3Qgbm9ybWFsaXplIGAvaW5kZXhgIGluIHRoZSBwYWdlIG5hbWVcbiAgICAvLyBzbyB3ZSBuZWVkIHRvIHRvIHByb2Nlc3MgZHluYW1pYyByb3V0ZXMgcHJvcGVybHlcbiAgICAvLyBUT0RPOiBmaXggdHVyYm9wYWNrIHByb3ZpZGluZyBkaWZmZXJpbmcgdmFsdWUgZnJvbSB3ZWJwYWNrXG4gICAgaWYgKHByb2Nlc3MuZW52LlRVUkJPUEFDSykge1xuICAgICAgICBzcmNQYWdlID0gc3JjUGFnZS5yZXBsYWNlKC9cXC9pbmRleCQvLCAnJykgfHwgJy8nO1xuICAgIH0gZWxzZSBpZiAoc3JjUGFnZSA9PT0gJy9pbmRleCcpIHtcbiAgICAgICAgLy8gd2UgYWx3YXlzIG5vcm1hbGl6ZSAvaW5kZXggc3BlY2lmaWNhbGx5XG4gICAgICAgIHNyY1BhZ2UgPSAnLyc7XG4gICAgfVxuICAgIGNvbnN0IG11bHRpWm9uZURyYWZ0TW9kZSA9IHByb2Nlc3MuZW52Ll9fTkVYVF9NVUxUSV9aT05FX0RSQUZUX01PREU7XG4gICAgY29uc3QgcHJlcGFyZVJlc3VsdCA9IGF3YWl0IHJvdXRlTW9kdWxlLnByZXBhcmUocmVxLCByZXMsIHtcbiAgICAgICAgc3JjUGFnZSxcbiAgICAgICAgbXVsdGlab25lRHJhZnRNb2RlXG4gICAgfSk7XG4gICAgaWYgKCFwcmVwYXJlUmVzdWx0KSB7XG4gICAgICAgIHJlcy5zdGF0dXNDb2RlID0gNDAwO1xuICAgICAgICByZXMuZW5kKCdCYWQgUmVxdWVzdCcpO1xuICAgICAgICBjdHgud2FpdFVudGlsID09IG51bGwgPyB2b2lkIDAgOiBjdHgud2FpdFVudGlsLmNhbGwoY3R4LCBQcm9taXNlLnJlc29sdmUoKSk7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICBjb25zdCB7IGJ1aWxkSWQsIHBhcmFtcywgbmV4dENvbmZpZywgaXNEcmFmdE1vZGUsIHByZXJlbmRlck1hbmlmZXN0LCByb3V0ZXJTZXJ2ZXJDb250ZXh0LCBpc09uRGVtYW5kUmV2YWxpZGF0ZSwgcmV2YWxpZGF0ZU9ubHlHZW5lcmF0ZWQsIHJlc29sdmVkUGF0aG5hbWUgfSA9IHByZXBhcmVSZXN1bHQ7XG4gICAgY29uc3Qgbm9ybWFsaXplZFNyY1BhZ2UgPSBub3JtYWxpemVBcHBQYXRoKHNyY1BhZ2UpO1xuICAgIGxldCBpc0lzciA9IEJvb2xlYW4ocHJlcmVuZGVyTWFuaWZlc3QuZHluYW1pY1JvdXRlc1tub3JtYWxpemVkU3JjUGFnZV0gfHwgcHJlcmVuZGVyTWFuaWZlc3Qucm91dGVzW3Jlc29sdmVkUGF0aG5hbWVdKTtcbiAgICBpZiAoaXNJc3IgJiYgIWlzRHJhZnRNb2RlKSB7XG4gICAgICAgIGNvbnN0IGlzUHJlcmVuZGVyZWQgPSBCb29sZWFuKHByZXJlbmRlck1hbmlmZXN0LnJvdXRlc1tyZXNvbHZlZFBhdGhuYW1lXSk7XG4gICAgICAgIGNvbnN0IHByZXJlbmRlckluZm8gPSBwcmVyZW5kZXJNYW5pZmVzdC5keW5hbWljUm91dGVzW25vcm1hbGl6ZWRTcmNQYWdlXTtcbiAgICAgICAgaWYgKHByZXJlbmRlckluZm8pIHtcbiAgICAgICAgICAgIGlmIChwcmVyZW5kZXJJbmZvLmZhbGxiYWNrID09PSBmYWxzZSAmJiAhaXNQcmVyZW5kZXJlZCkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBOb0ZhbGxiYWNrRXJyb3IoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBsZXQgY2FjaGVLZXkgPSBudWxsO1xuICAgIGlmIChpc0lzciAmJiAhcm91dGVNb2R1bGUuaXNEZXYgJiYgIWlzRHJhZnRNb2RlKSB7XG4gICAgICAgIGNhY2hlS2V5ID0gcmVzb2x2ZWRQYXRobmFtZTtcbiAgICAgICAgLy8gZW5zdXJlIC9pbmRleCBhbmQgLyBpcyBub3JtYWxpemVkIHRvIG9uZSBrZXlcbiAgICAgICAgY2FjaGVLZXkgPSBjYWNoZUtleSA9PT0gJy9pbmRleCcgPyAnLycgOiBjYWNoZUtleTtcbiAgICB9XG4gICAgY29uc3Qgc3VwcG9ydHNEeW5hbWljUmVzcG9uc2UgPSAvLyBJZiB3ZSdyZSBpbiBkZXZlbG9wbWVudCwgd2UgYWx3YXlzIHN1cHBvcnQgZHluYW1pYyBIVE1MXG4gICAgcm91dGVNb2R1bGUuaXNEZXYgPT09IHRydWUgfHwgLy8gSWYgdGhpcyBpcyBub3QgU1NHIG9yIGRvZXMgbm90IGhhdmUgc3RhdGljIHBhdGhzLCB0aGVuIGl0IHN1cHBvcnRzXG4gICAgLy8gZHluYW1pYyBIVE1MLlxuICAgICFpc0lzcjtcbiAgICAvLyBUaGlzIGlzIGEgcmV2YWxpZGF0aW9uIHJlcXVlc3QgaWYgdGhlIHJlcXVlc3QgaXMgZm9yIGEgc3RhdGljXG4gICAgLy8gcGFnZSBhbmQgaXQgaXMgbm90IGJlaW5nIHJlc3VtZWQgZnJvbSBhIHBvc3Rwb25lZCByZW5kZXIgYW5kXG4gICAgLy8gaXQgaXMgbm90IGEgZHluYW1pYyBSU0MgcmVxdWVzdCB0aGVuIGl0IGlzIGEgcmV2YWxpZGF0aW9uXG4gICAgLy8gcmVxdWVzdC5cbiAgICBjb25zdCBpc1JldmFsaWRhdGUgPSBpc0lzciAmJiAhc3VwcG9ydHNEeW5hbWljUmVzcG9uc2U7XG4gICAgY29uc3QgbWV0aG9kID0gcmVxLm1ldGhvZCB8fCAnR0VUJztcbiAgICBjb25zdCB0cmFjZXIgPSBnZXRUcmFjZXIoKTtcbiAgICBjb25zdCBhY3RpdmVTcGFuID0gdHJhY2VyLmdldEFjdGl2ZVNjb3BlU3BhbigpO1xuICAgIGNvbnN0IGNvbnRleHQgPSB7XG4gICAgICAgIHBhcmFtcyxcbiAgICAgICAgcHJlcmVuZGVyTWFuaWZlc3QsXG4gICAgICAgIHJlbmRlck9wdHM6IHtcbiAgICAgICAgICAgIGV4cGVyaW1lbnRhbDoge1xuICAgICAgICAgICAgICAgIGR5bmFtaWNJTzogQm9vbGVhbihuZXh0Q29uZmlnLmV4cGVyaW1lbnRhbC5keW5hbWljSU8pLFxuICAgICAgICAgICAgICAgIGF1dGhJbnRlcnJ1cHRzOiBCb29sZWFuKG5leHRDb25maWcuZXhwZXJpbWVudGFsLmF1dGhJbnRlcnJ1cHRzKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHN1cHBvcnRzRHluYW1pY1Jlc3BvbnNlLFxuICAgICAgICAgICAgaW5jcmVtZW50YWxDYWNoZTogZ2V0UmVxdWVzdE1ldGEocmVxLCAnaW5jcmVtZW50YWxDYWNoZScpLFxuICAgICAgICAgICAgY2FjaGVMaWZlUHJvZmlsZXM6IChfbmV4dENvbmZpZ19leHBlcmltZW50YWwgPSBuZXh0Q29uZmlnLmV4cGVyaW1lbnRhbCkgPT0gbnVsbCA/IHZvaWQgMCA6IF9uZXh0Q29uZmlnX2V4cGVyaW1lbnRhbC5jYWNoZUxpZmUsXG4gICAgICAgICAgICBpc1JldmFsaWRhdGUsXG4gICAgICAgICAgICB3YWl0VW50aWw6IGN0eC53YWl0VW50aWwsXG4gICAgICAgICAgICBvbkNsb3NlOiAoY2IpPT57XG4gICAgICAgICAgICAgICAgcmVzLm9uKCdjbG9zZScsIGNiKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBvbkFmdGVyVGFza0Vycm9yOiB1bmRlZmluZWQsXG4gICAgICAgICAgICBvbkluc3RydW1lbnRhdGlvblJlcXVlc3RFcnJvcjogKGVycm9yLCBfcmVxdWVzdCwgZXJyb3JDb250ZXh0KT0+cm91dGVNb2R1bGUub25SZXF1ZXN0RXJyb3IocmVxLCBlcnJvciwgZXJyb3JDb250ZXh0LCByb3V0ZXJTZXJ2ZXJDb250ZXh0KVxuICAgICAgICB9LFxuICAgICAgICBzaGFyZWRDb250ZXh0OiB7XG4gICAgICAgICAgICBidWlsZElkXG4gICAgICAgIH1cbiAgICB9O1xuICAgIGNvbnN0IG5vZGVOZXh0UmVxID0gbmV3IE5vZGVOZXh0UmVxdWVzdChyZXEpO1xuICAgIGNvbnN0IG5vZGVOZXh0UmVzID0gbmV3IE5vZGVOZXh0UmVzcG9uc2UocmVzKTtcbiAgICBjb25zdCBuZXh0UmVxID0gTmV4dFJlcXVlc3RBZGFwdGVyLmZyb21Ob2RlTmV4dFJlcXVlc3Qobm9kZU5leHRSZXEsIHNpZ25hbEZyb21Ob2RlUmVzcG9uc2UocmVzKSk7XG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgaW52b2tlUm91dGVNb2R1bGUgPSBhc3luYyAoc3Bhbik9PntcbiAgICAgICAgICAgIHJldHVybiByb3V0ZU1vZHVsZS5oYW5kbGUobmV4dFJlcSwgY29udGV4dCkuZmluYWxseSgoKT0+e1xuICAgICAgICAgICAgICAgIGlmICghc3BhbikgcmV0dXJuO1xuICAgICAgICAgICAgICAgIHNwYW4uc2V0QXR0cmlidXRlcyh7XG4gICAgICAgICAgICAgICAgICAgICdodHRwLnN0YXR1c19jb2RlJzogcmVzLnN0YXR1c0NvZGUsXG4gICAgICAgICAgICAgICAgICAgICduZXh0LnJzYyc6IGZhbHNlXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgY29uc3Qgcm9vdFNwYW5BdHRyaWJ1dGVzID0gdHJhY2VyLmdldFJvb3RTcGFuQXR0cmlidXRlcygpO1xuICAgICAgICAgICAgICAgIC8vIFdlIHdlcmUgdW5hYmxlIHRvIGdldCBhdHRyaWJ1dGVzLCBwcm9iYWJseSBPVEVMIGlzIG5vdCBlbmFibGVkXG4gICAgICAgICAgICAgICAgaWYgKCFyb290U3BhbkF0dHJpYnV0ZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAocm9vdFNwYW5BdHRyaWJ1dGVzLmdldCgnbmV4dC5zcGFuX3R5cGUnKSAhPT0gQmFzZVNlcnZlclNwYW4uaGFuZGxlUmVxdWVzdCkge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oYFVuZXhwZWN0ZWQgcm9vdCBzcGFuIHR5cGUgJyR7cm9vdFNwYW5BdHRyaWJ1dGVzLmdldCgnbmV4dC5zcGFuX3R5cGUnKX0nLiBQbGVhc2UgcmVwb3J0IHRoaXMgTmV4dC5qcyBpc3N1ZSBodHRwczovL2dpdGh1Yi5jb20vdmVyY2VsL25leHQuanNgKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjb25zdCByb3V0ZSA9IHJvb3RTcGFuQXR0cmlidXRlcy5nZXQoJ25leHQucm91dGUnKTtcbiAgICAgICAgICAgICAgICBpZiAocm91dGUpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbmFtZSA9IGAke21ldGhvZH0gJHtyb3V0ZX1gO1xuICAgICAgICAgICAgICAgICAgICBzcGFuLnNldEF0dHJpYnV0ZXMoe1xuICAgICAgICAgICAgICAgICAgICAgICAgJ25leHQucm91dGUnOiByb3V0ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICdodHRwLnJvdXRlJzogcm91dGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAnbmV4dC5zcGFuX25hbWUnOiBuYW1lXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICBzcGFuLnVwZGF0ZU5hbWUobmFtZSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgc3Bhbi51cGRhdGVOYW1lKGAke21ldGhvZH0gJHtyZXEudXJsfWApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuICAgICAgICBjb25zdCBoYW5kbGVSZXNwb25zZSA9IGFzeW5jIChjdXJyZW50U3Bhbik9PntcbiAgICAgICAgICAgIHZhciBfY2FjaGVFbnRyeV92YWx1ZTtcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlR2VuZXJhdG9yID0gYXN5bmMgKHsgcHJldmlvdXNDYWNoZUVudHJ5IH0pPT57XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFnZXRSZXF1ZXN0TWV0YShyZXEsICdtaW5pbWFsTW9kZScpICYmIGlzT25EZW1hbmRSZXZhbGlkYXRlICYmIHJldmFsaWRhdGVPbmx5R2VuZXJhdGVkICYmICFwcmV2aW91c0NhY2hlRW50cnkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcy5zdGF0dXNDb2RlID0gNDA0O1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gb24tZGVtYW5kIHJldmFsaWRhdGUgYWx3YXlzIHNldHMgdGhpcyBoZWFkZXJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcy5zZXRIZWFkZXIoJ3gtbmV4dGpzLWNhY2hlJywgJ1JFVkFMSURBVEVEJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXMuZW5kKCdUaGlzIHBhZ2UgY291bGQgbm90IGJlIGZvdW5kJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGludm9rZVJvdXRlTW9kdWxlKGN1cnJlbnRTcGFuKTtcbiAgICAgICAgICAgICAgICAgICAgcmVxLmZldGNoTWV0cmljcyA9IGNvbnRleHQucmVuZGVyT3B0cy5mZXRjaE1ldHJpY3M7XG4gICAgICAgICAgICAgICAgICAgIGxldCBwZW5kaW5nV2FpdFVudGlsID0gY29udGV4dC5yZW5kZXJPcHRzLnBlbmRpbmdXYWl0VW50aWw7XG4gICAgICAgICAgICAgICAgICAgIC8vIEF0dGVtcHQgdXNpbmcgcHJvdmlkZWQgd2FpdFVudGlsIGlmIGF2YWlsYWJsZVxuICAgICAgICAgICAgICAgICAgICAvLyBpZiBpdCdzIG5vdCB3ZSBmYWxsYmFjayB0byBzZW5kUmVzcG9uc2UncyBoYW5kbGluZ1xuICAgICAgICAgICAgICAgICAgICBpZiAocGVuZGluZ1dhaXRVbnRpbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGN0eC53YWl0VW50aWwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdHgud2FpdFVudGlsKHBlbmRpbmdXYWl0VW50aWwpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBlbmRpbmdXYWl0VW50aWwgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY2FjaGVUYWdzID0gY29udGV4dC5yZW5kZXJPcHRzLmNvbGxlY3RlZFRhZ3M7XG4gICAgICAgICAgICAgICAgICAgIC8vIElmIHRoZSByZXF1ZXN0IGlzIGZvciBhIHN0YXRpYyByZXNwb25zZSwgd2UgY2FuIGNhY2hlIGl0IHNvIGxvbmdcbiAgICAgICAgICAgICAgICAgICAgLy8gYXMgaXQncyBub3QgZWRnZS5cbiAgICAgICAgICAgICAgICAgICAgaWYgKGlzSXNyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBibG9iID0gYXdhaXQgcmVzcG9uc2UuYmxvYigpO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gQ29weSB0aGUgaGVhZGVycyBmcm9tIHRoZSByZXNwb25zZS5cbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGhlYWRlcnMgPSB0b05vZGVPdXRnb2luZ0h0dHBIZWFkZXJzKHJlc3BvbnNlLmhlYWRlcnMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNhY2hlVGFncykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlYWRlcnNbTkVYVF9DQUNIRV9UQUdTX0hFQURFUl0gPSBjYWNoZVRhZ3M7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWhlYWRlcnNbJ2NvbnRlbnQtdHlwZSddICYmIGJsb2IudHlwZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlYWRlcnNbJ2NvbnRlbnQtdHlwZSddID0gYmxvYi50eXBlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcmV2YWxpZGF0ZSA9IHR5cGVvZiBjb250ZXh0LnJlbmRlck9wdHMuY29sbGVjdGVkUmV2YWxpZGF0ZSA9PT0gJ3VuZGVmaW5lZCcgfHwgY29udGV4dC5yZW5kZXJPcHRzLmNvbGxlY3RlZFJldmFsaWRhdGUgPj0gSU5GSU5JVEVfQ0FDSEUgPyBmYWxzZSA6IGNvbnRleHQucmVuZGVyT3B0cy5jb2xsZWN0ZWRSZXZhbGlkYXRlO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZXhwaXJlID0gdHlwZW9mIGNvbnRleHQucmVuZGVyT3B0cy5jb2xsZWN0ZWRFeHBpcmUgPT09ICd1bmRlZmluZWQnIHx8IGNvbnRleHQucmVuZGVyT3B0cy5jb2xsZWN0ZWRFeHBpcmUgPj0gSU5GSU5JVEVfQ0FDSEUgPyB1bmRlZmluZWQgOiBjb250ZXh0LnJlbmRlck9wdHMuY29sbGVjdGVkRXhwaXJlO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gQ3JlYXRlIHRoZSBjYWNoZSBlbnRyeSBmb3IgdGhlIHJlc3BvbnNlLlxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgY2FjaGVFbnRyeSA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBraW5kOiBDYWNoZWRSb3V0ZUtpbmQuQVBQX1JPVVRFLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0dXM6IHJlc3BvbnNlLnN0YXR1cyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9keTogQnVmZmVyLmZyb20oYXdhaXQgYmxvYi5hcnJheUJ1ZmZlcigpKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVhZGVyc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FjaGVDb250cm9sOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldmFsaWRhdGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cGlyZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gY2FjaGVFbnRyeTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHNlbmQgcmVzcG9uc2Ugd2l0aG91dCBjYWNoaW5nIGlmIG5vdCBJU1JcbiAgICAgICAgICAgICAgICAgICAgICAgIGF3YWl0IHNlbmRSZXNwb25zZShub2RlTmV4dFJlcSwgbm9kZU5leHRSZXMsIHJlc3BvbnNlLCBjb250ZXh0LnJlbmRlck9wdHMucGVuZGluZ1dhaXRVbnRpbCk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgICAgICAgICAvLyBpZiB0aGlzIGlzIGEgYmFja2dyb3VuZCByZXZhbGlkYXRlIHdlIG5lZWQgdG8gcmVwb3J0XG4gICAgICAgICAgICAgICAgICAgIC8vIHRoZSByZXF1ZXN0IGVycm9yIGhlcmUgYXMgaXQgd29uJ3QgYmUgYnViYmxlZFxuICAgICAgICAgICAgICAgICAgICBpZiAocHJldmlvdXNDYWNoZUVudHJ5ID09IG51bGwgPyB2b2lkIDAgOiBwcmV2aW91c0NhY2hlRW50cnkuaXNTdGFsZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYXdhaXQgcm91dGVNb2R1bGUub25SZXF1ZXN0RXJyb3IocmVxLCBlcnIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3V0ZXJLaW5kOiAnQXBwIFJvdXRlcicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcm91dGVQYXRoOiBzcmNQYWdlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvdXRlVHlwZTogJ3JvdXRlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXZhbGlkYXRlUmVhc29uOiBnZXRSZXZhbGlkYXRlUmVhc29uKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNSZXZhbGlkYXRlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc09uRGVtYW5kUmV2YWxpZGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICB9LCByb3V0ZXJTZXJ2ZXJDb250ZXh0KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB0aHJvdyBlcnI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGNvbnN0IGNhY2hlRW50cnkgPSBhd2FpdCByb3V0ZU1vZHVsZS5oYW5kbGVSZXNwb25zZSh7XG4gICAgICAgICAgICAgICAgcmVxLFxuICAgICAgICAgICAgICAgIG5leHRDb25maWcsXG4gICAgICAgICAgICAgICAgY2FjaGVLZXksXG4gICAgICAgICAgICAgICAgcm91dGVLaW5kOiBSb3V0ZUtpbmQuQVBQX1JPVVRFLFxuICAgICAgICAgICAgICAgIGlzRmFsbGJhY2s6IGZhbHNlLFxuICAgICAgICAgICAgICAgIHByZXJlbmRlck1hbmlmZXN0LFxuICAgICAgICAgICAgICAgIGlzUm91dGVQUFJFbmFibGVkOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBpc09uRGVtYW5kUmV2YWxpZGF0ZSxcbiAgICAgICAgICAgICAgICByZXZhbGlkYXRlT25seUdlbmVyYXRlZCxcbiAgICAgICAgICAgICAgICByZXNwb25zZUdlbmVyYXRvcixcbiAgICAgICAgICAgICAgICB3YWl0VW50aWw6IGN0eC53YWl0VW50aWxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgLy8gd2UgZG9uJ3QgY3JlYXRlIGEgY2FjaGVFbnRyeSBmb3IgSVNSXG4gICAgICAgICAgICBpZiAoIWlzSXNyKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoKGNhY2hlRW50cnkgPT0gbnVsbCA/IHZvaWQgMCA6IChfY2FjaGVFbnRyeV92YWx1ZSA9IGNhY2hlRW50cnkudmFsdWUpID09IG51bGwgPyB2b2lkIDAgOiBfY2FjaGVFbnRyeV92YWx1ZS5raW5kKSAhPT0gQ2FjaGVkUm91dGVLaW5kLkFQUF9ST1VURSkge1xuICAgICAgICAgICAgICAgIHZhciBfY2FjaGVFbnRyeV92YWx1ZTE7XG4gICAgICAgICAgICAgICAgdGhyb3cgT2JqZWN0LmRlZmluZVByb3BlcnR5KG5ldyBFcnJvcihgSW52YXJpYW50OiBhcHAtcm91dGUgcmVjZWl2ZWQgaW52YWxpZCBjYWNoZSBlbnRyeSAke2NhY2hlRW50cnkgPT0gbnVsbCA/IHZvaWQgMCA6IChfY2FjaGVFbnRyeV92YWx1ZTEgPSBjYWNoZUVudHJ5LnZhbHVlKSA9PSBudWxsID8gdm9pZCAwIDogX2NhY2hlRW50cnlfdmFsdWUxLmtpbmR9YCksIFwiX19ORVhUX0VSUk9SX0NPREVcIiwge1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogXCJFNzAxXCIsXG4gICAgICAgICAgICAgICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghZ2V0UmVxdWVzdE1ldGEocmVxLCAnbWluaW1hbE1vZGUnKSkge1xuICAgICAgICAgICAgICAgIHJlcy5zZXRIZWFkZXIoJ3gtbmV4dGpzLWNhY2hlJywgaXNPbkRlbWFuZFJldmFsaWRhdGUgPyAnUkVWQUxJREFURUQnIDogY2FjaGVFbnRyeS5pc01pc3MgPyAnTUlTUycgOiBjYWNoZUVudHJ5LmlzU3RhbGUgPyAnU1RBTEUnIDogJ0hJVCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gRHJhZnQgbW9kZSBzaG91bGQgbmV2ZXIgYmUgY2FjaGVkXG4gICAgICAgICAgICBpZiAoaXNEcmFmdE1vZGUpIHtcbiAgICAgICAgICAgICAgICByZXMuc2V0SGVhZGVyKCdDYWNoZS1Db250cm9sJywgJ3ByaXZhdGUsIG5vLWNhY2hlLCBuby1zdG9yZSwgbWF4LWFnZT0wLCBtdXN0LXJldmFsaWRhdGUnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGhlYWRlcnMgPSBmcm9tTm9kZU91dGdvaW5nSHR0cEhlYWRlcnMoY2FjaGVFbnRyeS52YWx1ZS5oZWFkZXJzKTtcbiAgICAgICAgICAgIGlmICghKGdldFJlcXVlc3RNZXRhKHJlcSwgJ21pbmltYWxNb2RlJykgJiYgaXNJc3IpKSB7XG4gICAgICAgICAgICAgICAgaGVhZGVycy5kZWxldGUoTkVYVF9DQUNIRV9UQUdTX0hFQURFUik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBJZiBjYWNoZSBjb250cm9sIGlzIGFscmVhZHkgc2V0IG9uIHRoZSByZXNwb25zZSB3ZSBkb24ndFxuICAgICAgICAgICAgLy8gb3ZlcnJpZGUgaXQgdG8gYWxsb3cgdXNlcnMgdG8gY3VzdG9taXplIGl0IHZpYSBuZXh0LmNvbmZpZ1xuICAgICAgICAgICAgaWYgKGNhY2hlRW50cnkuY2FjaGVDb250cm9sICYmICFyZXMuZ2V0SGVhZGVyKCdDYWNoZS1Db250cm9sJykgJiYgIWhlYWRlcnMuZ2V0KCdDYWNoZS1Db250cm9sJykpIHtcbiAgICAgICAgICAgICAgICBoZWFkZXJzLnNldCgnQ2FjaGUtQ29udHJvbCcsIGdldENhY2hlQ29udHJvbEhlYWRlcihjYWNoZUVudHJ5LmNhY2hlQ29udHJvbCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYXdhaXQgc2VuZFJlc3BvbnNlKG5vZGVOZXh0UmVxLCBub2RlTmV4dFJlcywgbmV3IFJlc3BvbnNlKGNhY2hlRW50cnkudmFsdWUuYm9keSwge1xuICAgICAgICAgICAgICAgIGhlYWRlcnMsXG4gICAgICAgICAgICAgICAgc3RhdHVzOiBjYWNoZUVudHJ5LnZhbHVlLnN0YXR1cyB8fCAyMDBcbiAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9O1xuICAgICAgICAvLyBUT0RPOiBhY3RpdmVTcGFuIGNvZGUgcGF0aCBpcyBmb3Igd2hlbiB3cmFwcGVkIGJ5XG4gICAgICAgIC8vIG5leHQtc2VydmVyIGNhbiBiZSByZW1vdmVkIHdoZW4gdGhpcyBpcyBubyBsb25nZXIgdXNlZFxuICAgICAgICBpZiAoYWN0aXZlU3Bhbikge1xuICAgICAgICAgICAgYXdhaXQgaGFuZGxlUmVzcG9uc2UoYWN0aXZlU3Bhbik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBhd2FpdCB0cmFjZXIud2l0aFByb3BhZ2F0ZWRDb250ZXh0KHJlcS5oZWFkZXJzLCAoKT0+dHJhY2VyLnRyYWNlKEJhc2VTZXJ2ZXJTcGFuLmhhbmRsZVJlcXVlc3QsIHtcbiAgICAgICAgICAgICAgICAgICAgc3Bhbk5hbWU6IGAke21ldGhvZH0gJHtyZXEudXJsfWAsXG4gICAgICAgICAgICAgICAgICAgIGtpbmQ6IFNwYW5LaW5kLlNFUlZFUixcbiAgICAgICAgICAgICAgICAgICAgYXR0cmlidXRlczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgJ2h0dHAubWV0aG9kJzogbWV0aG9kLFxuICAgICAgICAgICAgICAgICAgICAgICAgJ2h0dHAudGFyZ2V0JzogcmVxLnVybFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSwgaGFuZGxlUmVzcG9uc2UpKTtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAvLyBpZiB3ZSBhcmVuJ3Qgd3JhcHBlZCBieSBiYXNlLXNlcnZlciBoYW5kbGUgaGVyZVxuICAgICAgICBpZiAoIWFjdGl2ZVNwYW4gJiYgIShlcnIgaW5zdGFuY2VvZiBOb0ZhbGxiYWNrRXJyb3IpKSB7XG4gICAgICAgICAgICBhd2FpdCByb3V0ZU1vZHVsZS5vblJlcXVlc3RFcnJvcihyZXEsIGVyciwge1xuICAgICAgICAgICAgICAgIHJvdXRlcktpbmQ6ICdBcHAgUm91dGVyJyxcbiAgICAgICAgICAgICAgICByb3V0ZVBhdGg6IG5vcm1hbGl6ZWRTcmNQYWdlLFxuICAgICAgICAgICAgICAgIHJvdXRlVHlwZTogJ3JvdXRlJyxcbiAgICAgICAgICAgICAgICByZXZhbGlkYXRlUmVhc29uOiBnZXRSZXZhbGlkYXRlUmVhc29uKHtcbiAgICAgICAgICAgICAgICAgICAgaXNSZXZhbGlkYXRlLFxuICAgICAgICAgICAgICAgICAgICBpc09uRGVtYW5kUmV2YWxpZGF0ZVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICAvLyByZXRocm93IHNvIHRoYXQgd2UgY2FuIGhhbmRsZSBzZXJ2aW5nIGVycm9yIHBhZ2VcbiAgICAgICAgLy8gSWYgdGhpcyBpcyBkdXJpbmcgc3RhdGljIGdlbmVyYXRpb24sIHRocm93IHRoZSBlcnJvciBhZ2Fpbi5cbiAgICAgICAgaWYgKGlzSXNyKSB0aHJvdyBlcnI7XG4gICAgICAgIC8vIE90aGVyd2lzZSwgc2VuZCBhIDUwMCByZXNwb25zZS5cbiAgICAgICAgYXdhaXQgc2VuZFJlc3BvbnNlKG5vZGVOZXh0UmVxLCBub2RlTmV4dFJlcywgbmV3IFJlc3BvbnNlKG51bGwsIHtcbiAgICAgICAgICAgIHN0YXR1czogNTAwXG4gICAgICAgIH0pKTtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxufVxuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1hcHAtcm91dGUuanMubWFwIl0sIm5hbWVzIjpbXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fchat%2Froute&page=%2Fapi%2Fchat%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fchat%2Froute.ts&appDir=%2FUsers%2Fsalman%2FDesktop%2Fchat-snap-gen%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fsalman%2FDesktop%2Fchat-snap-gen&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D&isGlobalNotFoundEnabled=!\n");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!******************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \******************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "(ssr)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!******************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \******************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "../app-render/work-async-storage.external":
/*!*****************************************************************************!*\
  !*** external "next/dist/server/app-render/work-async-storage.external.js" ***!
  \*****************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-async-storage.external.js");

/***/ }),

/***/ "./work-unit-async-storage.external":
/*!**********************************************************************************!*\
  !*** external "next/dist/server/app-render/work-unit-async-storage.external.js" ***!
  \**********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-unit-async-storage.external.js");

/***/ }),

/***/ "assert":
/*!*************************!*\
  !*** external "assert" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("assert");

/***/ }),

/***/ "async_hooks":
/*!******************************!*\
  !*** external "async_hooks" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("async_hooks");

/***/ }),

/***/ "buffer":
/*!*************************!*\
  !*** external "buffer" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("buffer");

/***/ }),

/***/ "console":
/*!**************************!*\
  !*** external "console" ***!
  \**************************/
/***/ ((module) => {

"use strict";
module.exports = require("console");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("crypto");

/***/ }),

/***/ "diagnostics_channel":
/*!**************************************!*\
  !*** external "diagnostics_channel" ***!
  \**************************************/
/***/ ((module) => {

"use strict";
module.exports = require("diagnostics_channel");

/***/ }),

/***/ "events":
/*!*************************!*\
  !*** external "events" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("events");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

"use strict";
module.exports = require("fs");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("http");

/***/ }),

/***/ "http2":
/*!************************!*\
  !*** external "http2" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("http2");

/***/ }),

/***/ "net":
/*!**********************!*\
  !*** external "net" ***!
  \**********************/
/***/ ((module) => {

"use strict";
module.exports = require("net");

/***/ }),

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "next/dist/shared/lib/no-fallback-error.external":
/*!******************************************************************!*\
  !*** external "next/dist/shared/lib/no-fallback-error.external" ***!
  \******************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/no-fallback-error.external");

/***/ }),

/***/ "next/dist/shared/lib/router/utils/app-paths":
/*!**************************************************************!*\
  !*** external "next/dist/shared/lib/router/utils/app-paths" ***!
  \**************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/app-paths");

/***/ }),

/***/ "node:crypto":
/*!******************************!*\
  !*** external "node:crypto" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("node:crypto");

/***/ }),

/***/ "node:events":
/*!******************************!*\
  !*** external "node:events" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("node:events");

/***/ }),

/***/ "node:stream":
/*!******************************!*\
  !*** external "node:stream" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("node:stream");

/***/ }),

/***/ "node:util":
/*!****************************!*\
  !*** external "node:util" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("node:util");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("path");

/***/ }),

/***/ "perf_hooks":
/*!*****************************!*\
  !*** external "perf_hooks" ***!
  \*****************************/
/***/ ((module) => {

"use strict";
module.exports = require("perf_hooks");

/***/ }),

/***/ "querystring":
/*!******************************!*\
  !*** external "querystring" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("querystring");

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("stream");

/***/ }),

/***/ "stream/web":
/*!*****************************!*\
  !*** external "stream/web" ***!
  \*****************************/
/***/ ((module) => {

"use strict";
module.exports = require("stream/web");

/***/ }),

/***/ "string_decoder":
/*!*********************************!*\
  !*** external "string_decoder" ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = require("string_decoder");

/***/ }),

/***/ "tls":
/*!**********************!*\
  !*** external "tls" ***!
  \**********************/
/***/ ((module) => {

"use strict";
module.exports = require("tls");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/***/ ((module) => {

"use strict";
module.exports = require("url");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("util");

/***/ }),

/***/ "util/types":
/*!*****************************!*\
  !*** external "util/types" ***!
  \*****************************/
/***/ ((module) => {

"use strict";
module.exports = require("util/types");

/***/ }),

/***/ "worker_threads":
/*!*********************************!*\
  !*** external "worker_threads" ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = require("worker_threads");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("zlib");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/zod","vendor-chunks/ai","vendor-chunks/@ai-sdk","vendor-chunks/@opentelemetry","vendor-chunks/zod-to-json-schema","vendor-chunks/eventsource-parser","vendor-chunks/throttleit","vendor-chunks/undici","vendor-chunks/@fastify","vendor-chunks/retry","vendor-chunks/@vercel","vendor-chunks/is-node-process","vendor-chunks/is-buffer","vendor-chunks/async-retry"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fchat%2Froute&page=%2Fapi%2Fchat%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fchat%2Froute.ts&appDir=%2FUsers%2Fsalman%2FDesktop%2Fchat-snap-gen%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fsalman%2FDesktop%2Fchat-snap-gen&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D&isGlobalNotFoundEnabled=!")));
module.exports = __webpack_exports__;

})();