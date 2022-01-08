const Swal = require('sweetalert2')

const swalert = (icon, title) => {
    Swal.fire({
        position: 'top-end',
        icon,
        title,
        showConfirmButton: false,
        timer: 1500
      })
}

export default swalert