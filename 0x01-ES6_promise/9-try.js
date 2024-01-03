export default function (mathFunction) {
  const queue = [];
  let result;
  try {
    result = mathFunction();
  } catch (error) {
    result = String(error);
  } finally {
    queue.push(result);
    queue.push('Guardrail was processed');
  }

  return queue;
}
