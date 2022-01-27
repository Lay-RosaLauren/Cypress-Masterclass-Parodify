BDD (Desenvolvimento guiado por comportamento)

Feature: Fazer o pedido
Ator: Cliente com fome

Cenário: Fazer pedido na cozinha

    Dado que acesso o sistema de pedidos
    E o cliente quer comer Lazanha
    Quando faço a solicitação do pedido 
    Então o pedido deve ser registrado no sistema
    E deve ser exibido no monitor do cozinheiro

Feature: Pedido preparado
Ator: cozinheiro

Cenário: Notificar pedido pronto
    Dado que recebi um novo pedido
    E preparei esse pedido
    Quando faço a notificação do pedido pronto
    Então o pedido é atualizado no monitor
    E o Garçon recebe uma notificação para entregá-lo ao cliente