
const btnLike = document.getElementById('like');
const btnUnlike = document.getElementById('unlike');
const btnAbs = document.getElementById('abstener');

var like = 0;
var unlike = 0;
var abs = 0;

hideDisabled ();

btnLike.addEventListener ("click", ()=>{
    const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
          confirmButton: 'ms-2 btn btn-primary',
          cancelButton: 'btn btn-danger'
        },
        buttonsStyling: false
      })
      
      swalWithBootstrapButtons.fire({
        title: '¿Estás seguro de tu voto?',
        text: "¡No podrás retractarte!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: '¡Sí, votar!',
        cancelButtonText: '¡No, cancelar!',
        reverseButtons: true
      }).then((result) => {
        if (result.isConfirmed) {
          swalWithBootstrapButtons.fire(
            '¡Registrado!',
            'Tu voto ha sido enviado.',
            'success'
          )

          //Para los sig. consultar functions_Client.js
          console.log('voto a favor')
          hideVotacion ()
          showDisabled()
        } else if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire(
            'Cancelado',
            'Realiza tu voto :)',
            'error'
          )
        }
      })
})


btnUnlike.addEventListener ("click", ()=> {
    const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
          confirmButton: 'ms-2 btn btn-primary',
          cancelButton: 'btn btn-danger'
        },
        buttonsStyling: false
      })
      
      swalWithBootstrapButtons.fire({
        title: '¿Estás seguro de tu voto?',
        text: "¡No podrás retractarte!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: '¡Sí, votar!',
        cancelButtonText: '¡No, cancelar!',
        reverseButtons: true
      }).then((result) => {
        if (result.isConfirmed) {
          swalWithBootstrapButtons.fire(
            '¡Registrado!',
            'Tu voto ha sido enviado.',
            'success'
          )
          //Para los sig. consultar functions_Client.js
          hideVotacion()
          showDisabled()
          console.log('Voto en contra')
        } else if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire(
            'Cancelado',
            'Realiza tu voto :)',
            'error'
          )
        }
      })
})

btnAbs.addEventListener ("click", ()=>{
  const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'ms-2 btn btn-primary',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false
    })
    
    swalWithBootstrapButtons.fire({
      title: '¿Estás seguro de reservar tu voto?',
      text: "¡No podrás retractarte!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: '¡Sí, me abstengo!',
      cancelButtonText: '¡No, quiero votar!',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        swalWithBootstrapButtons.fire(
          '¡Voto abstenido!',
          'Has decidido no votar.',
          'success'
        )
        //Para los sig. consultar functions_Client.js
        hideVotacion()
        showDisabled()
        console.log('Voto abstenido')
      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire(
          'Cancelado',
          'Realiza tu voto :)',
          'error'
        )
      }
    })
})






