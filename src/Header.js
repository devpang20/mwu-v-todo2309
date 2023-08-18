export default function Header({$target}) {
    const $header = document.createElement('h1');
    $header.textContent = "헤더";
    $target.appendChild($header);
}
