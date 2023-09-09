## Ideia do TDD 
--- Construir uma aplicação a partir dos testes
- Os testes são constrituídos de 3 partes
    * given - cenário
    * when - Quando
    * then - Então

## Principios SOLID

S => SPR - Single Responsability Principle (Principio de responsabilidade única) - Separar coisas que mudam por motivos diferente
O => OCP - Open-Closed Principle (Principio de aberto / fechado) - Devemos estar fechados para modificação e abertos para extensao
L => LSP - Liskov Substitution Principle (Principio de Substituição de Interface) - 
    * Pre-condições nao podem ser fortalecidas, 
        -> Deixando de aceitar ENTRADAS que a superclasse considera valida
    * pós-condições nao devem ser enfraquecidas, 
        -> Deixando as saídas diferentes da expectativa de quem esta chamando o metodo
    * Invariantes devem se manter consistentes
        -> Se uma subclasse permite que o estado conceitual da hierarquia de classes fique invalido
I => ISP - Interface Segregation Principle (Principio da Segregação de Interface) - Cuidado com interfaces muito abrangente, não obrigue subclasses a implementar metodos que elas nao precisam
D => DIP - Dependence Inversion Principlr (Principio da Inversão de Dependencia) - Modulos de alto nível não devem depender de modulos de baixo nível

## Observações
- Order pertence a camada de domínio da aplicação
- Elas contem as regras de negocios
- Template method => manter parte do comportamento na super classe e leva para sub classe o que muda, o que varia
- Ao tornar um membro da classe abstração não é possível instanciar a classe e com isso toda a classe passa a ser abstrata, com isso tudo da classe terá que ser modificado. Ambos dependem de abstrações