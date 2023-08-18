export default function TodoForm({$target, onSubmit}) {
    const $form = document.createElement('form');
    $target.appendChild($form);

    $form.innerHTML = `
        <input type='text' name='todo' />
        <button>버튼</button>
    `

    $form.addEventListener('submit', e => {
        e.preventDefault();
        const $input = $form.querySelector('input');
        const text = $input.value;

        if (text.length > 1) {
            onSubmit(text);
            $input.value = '';
        }
    })
}