export default function TodoList({$target}) {
    const $header = document.createElement('h1');
    $header.textContent = "헤더";
    $target.appendChild($header);
}