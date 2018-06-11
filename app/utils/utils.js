export const resolveImageURL = (url) => {
  if (url[0] === '/')
    return "https://ease.space" + url;
  return url;
};

export function reflect(promise){
  return promise.then(function(v){ return {data:v, error: false }},
      function(e){ return {data:e, error: true }});
}
