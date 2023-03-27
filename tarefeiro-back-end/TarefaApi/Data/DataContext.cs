using Microsoft.EntityFrameworkCore;
using TarefaApi.Models;

namespace TarefaApi.Data
{
    public class DataContext: DbContext
    {
        public DataContext(DbContextOptions<DataContext> options): base(options) { }

        public DbSet<Tarefa> Tarefas { get; set; }
        public DbSet<TarefaTipo> TarefasTipos { get; set; }
        public DbSet<Status> Statuses { get; set; }
        public DbSet<Cliente> Clientes { get; set; }   

    }
}
