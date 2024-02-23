import '@sweetalert2/theme-dark';
import Swal from 'sweetalert2'
export default {
    authError() {
      Swal.fire({
        icon: 'error',
        title: 'Ocorreu um erro',
        text: 'Se certifique de estar logado e verifique sua conexão com a internet'
      })
    },
    conectionError(){
      Swal.fire({
      icon: 'error',
      title: 'Ocorreu um erro',
      text: 'Se certifique de estar logado e verifique sua conexão com a internet'
    
    })
  },
  success(){
    Swal.fire({
      icon: "success",
      title: "Your work has been saved",
      showConfirmButton: false,
      timer: 1500
    });
  },
  newUserError(){
    Swal.fire({
      icon: 'error',
      title: 'Ocorreu um erro',
      text: 'Não foi possível cadastrar esse usuário, verifique sua conexão e tente novamente'
    
    })
  },
  deleteTrade(){
  Swal.fire({
    title: "Você tem certeza que deseja excluir essa troca?",
    text: "Essa ação é irreversível",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#581c87",
    cancelButtonColor: "#d33",
    confirmButtonText: "Sim"
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire({
        title: "",
        text: "Troca excluída com sucesso",
        icon: "success"
      });
    }
  })
}}