async function commentFormHandler(event) {
    event.preventDefault();

    const content = document.querySelector('input[name="comment-body"]').value.trim();
    const post_id = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
    ];

    if (content) {

    }
    const responce = await fetch('/api/comments', {
        method: 'POST',
        body: JSON.stringify({
            post_id,
            content,
        }),
        headers: {
            "Content-Type": "application/json",
        },
    })

    if (responce.ok) {
        document.location.reload();
    } else {
        alert(responce.statusText)
    }   
}

document.querySelector(".comment-form").addEventListener("submit", commentFormHandler);