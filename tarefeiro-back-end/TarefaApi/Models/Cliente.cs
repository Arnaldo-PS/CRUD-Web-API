namespace TarefaApi.Models
{
    public class Cliente
    {
        public int Id { set; get; }
        public string ClienteNome { set; get; } = string.Empty;
        public string ClienteSenha { set; get; } = string.Empty;
        public string ClienteLogin { set; get; } = string.Empty;


        public string ClienteEmail { set; get; } = string.Empty;
        public int ClienteTelefone { set; get;}


    }
}
