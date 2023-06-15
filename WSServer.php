<?php

use Ratchet\MessageComponentInterface;
use Ratchet\ConnectionInterface;

require __DIR__ . './vendor/autoload.php';

class WSServer implements MessageComponentInterface {
    protected $clients;
    public function __construct() {
        echo "Constructed\n";
        $this->clients = new \SplObjectStorage;
    }
    public function onOpen(ConnectionInterface $conn) {
        echo "New connection!\n";
        $this->clients->attach($conn);
    }
    public function onMessage(ConnectionInterface $from, $msg) {
        foreach ($this->clients as $client) {
            if ($from != $client) {
                $client->send($msg);
            }
        }
    }
    public function onClose(ConnectionInterface $conn) {
        echo "Closed\n";
        $this->clients->detach($conn);
    }
    public function onError(ConnectionInterface $conn, \Exception $e) {
        echo "Error\n";
        $conn->close();
    }

    public function broadcast($message)
    {
        foreach ($this->clients as $client) {
            $client->send($message);
        }
    }
}

request()->session()->get('article_id');
// Run the server application through the WebSocket protocol on port 8080
$app = new Ratchet\App('localhost', 8000);
$app->route('/api/articles/{id}/sold', new WSServer, array('*'));
$app->run();


