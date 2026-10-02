// Starter data used to render blog cards when the page loads.
let blogPosts = [
    {title: "My First Blog Post", content: "This is the content of my first blog post." },
    {title: "My Second Blog Post", content: "This is the content of my second blog post." }
]

// Builds one blog card and appends it to the list container.
const createBlog = (title, content) => {
    // select the <ul> element to append our <li> elements to
    const blogList = document.getElementById("blog-list")

    const blog = document.createElement("li")

    // Title and content text nodes for this card.
    const blogName = document.createElement("span")
    blogName.textContent = title

    const blogContent = document.createElement("p")
    blogContent.textContent = content

    // Layout wrappers: top row (title/edit), bottom row (content/delete actions).
    const headerRow = document.createElement("div")
    headerRow.className = "blog-header"

    const actionRow = document.createElement("div")
    actionRow.className = "blog-actions"

    // edit title button
    const editTitleBtn = document.createElement("Button")
    editTitleBtn.textContent = "Edit Title"
    editTitleBtn.addEventListener("click", (e) => editTitle(e))

    // edit content button
    const editContentBtn = document.createElement("Button")
    editContentBtn.textContent = "Edit"
    editContentBtn.addEventListener("click", (e) => editContent(e))

    // delete button
    const deleteBtn = document.createElement("Button")
    deleteBtn.textContent = "Delete"
    deleteBtn.addEventListener("click", (e) => deleteBlog(e))

    headerRow.appendChild(blogName)
    headerRow.appendChild(editTitleBtn)

    actionRow.appendChild(editContentBtn)
    actionRow.appendChild(deleteBtn)

    blog.appendChild(headerRow)
    blog.appendChild(blogContent)
    blog.appendChild(actionRow)
    blogList.appendChild(blog)
}

blogPosts.map((blog) => createBlog(blog.title, blog.content))


// Prompts user for title/content, validates input, then renders a new card.
const addBlog = () => {

    const title = prompt("Enter your blog title:")
    if (!title || title.trim() === "") {
        alert("Blog title cannot be empty.")
        return
    }
    const getBlog = prompt("Enter your blog:")
    if (!getBlog || getBlog.trim() === "") {
        alert("Blog content cannot be empty.")
        return
    }
    createBlog(title, getBlog)
}

// Updates only the title text for one blog card.
const editTitle = (e) => {
    const blogItem = e.currentTarget.closest("li")
    if (!blogItem) return

    const blogSpan = blogItem.querySelector("span")
    if (!blogSpan) return

    const editedTitle = prompt("Edit your blog title:", blogSpan.textContent)

    if (editedTitle !== null && editedTitle.trim() !== "") {
        blogSpan.textContent = editedTitle.trim()
    }
}

// Updates only the content paragraph for one blog card.
const editContent = (e) => {
    const blogItem = e.currentTarget.closest("li")
    if (!blogItem) return

    const blogParagraph = blogItem.querySelector("p")
    if (!blogParagraph) return

    const editedBlog = prompt("Edit your blog:", blogParagraph.textContent)

    if (editedBlog !== null && editedBlog.trim() !== "") {
        blogParagraph.textContent = editedBlog.trim()
    }
}

// Confirms before removing a card from the DOM.
const deleteBlog = (e) => {
    const blogToDelete = e.currentTarget.closest("li")
    if (!blogToDelete) return

    const blogNameEl = blogToDelete.querySelector("span")
    const blogName = blogNameEl ? blogNameEl.textContent : "this post"

    const toDelete = confirm(`Are you sure you want to delete "${blogName}"?`)
    if (toDelete) {
        blogToDelete.remove()
        alert(`Blog post "${blogName}" deleted successfully`)
    }
}

window.onload = () => {
    const addBlogBtn = document.getElementById("add-blog-post-btn")
    addBlogBtn.addEventListener("click", addBlog)
}