/* 
    Ser autenticavel, significa ter o método autenticar
*/

export class SistemaAutenticacao {
    static login(autenticavel, senha) {
        if(SistemaAutenticacao.ehAutenticavel(autenticavel)) {
            return autenticavel.autenticar(senha);
        }
        return false;
    }

    static ehAutenticavel(autenticavel) {
        return "autenticar" in autenticavel && autenticavel.autenticar instanceof Function; // Verificando se a chave "autenticar" existe no objeto e se o objeto é uma instância de outro objeto
    }
}