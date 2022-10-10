/**
 * Exemplo de uso de um modulo nativo
 * @author henrique Monteiro Khouri
 */

const http = require('http')
http.createServer((req,res))=>({
    res.write("Bem-vindo ao Node")
    res.end()
}).Listen(4040)


