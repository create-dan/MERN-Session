import React from 'react'

const Navbar = () => {
  return (
    <div>
      {/* navbar starts */}

      <section>
        <nav
          className="navbar  justify-content-between"
          style={{ backgroundColor: "#2A0944", color: "white" }}
        >
          <a class="navbar-brand">Task Tracker</a>
          <form class="form-inline">
            <input
              class="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button class="btn btn-outline-success my-2 my-sm-0" type="submit">
              Search
            </button>
          </form>
        </nav>
      </section>
      {/* navbar ends */}
    </div>
  );
}

export default Navbar