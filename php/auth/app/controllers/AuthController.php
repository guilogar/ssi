<?php
declare(strict_types=1);

class AuthController extends ControllerBase
{
    public function indexAction()
    {
        // Only work if is post
        if($this->request->isPost())
        {
            // Get the data post
            $post = (array) json_decode($this->request->getRawBody());

            $client_id = trim($post['client_id']);

            $credential = $this->db->query(
                "select * from credentials where client_id = ?",
                [$client_id]
            )->fetchArray();

            if($credential)
            {
                $token = password_hash($client_id, PASSWORD_DEFAULT);
                
                $this->db->query(
                    "insert into tokens(val) values(?)",
                    [$token]
                );
                
                return json_encode(
                    array(
                        "token_type" => "Bearer",
                        "access_token" => $token,
                    )
                );
            } else
            {
                return json_encode(
                    array(
                        "error" => "404",
                        "error_message" => "client_id not authorized",
                    )
                );
            }
        }
    }
}