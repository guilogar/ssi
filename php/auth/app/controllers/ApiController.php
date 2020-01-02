<?php
declare(strict_types=1);

class ApiController extends ControllerBase
{
    public function onConstruct()
    {
        // Get the headers and check if Authorization if send correctly
        $headers = (array) $this->request->getHeaders();

        if(isset($headers['Authorization']))
        {
            $auth = $headers['Authorization'];
            $token = str_replace('Bearer ', '', $auth);

            // query of database using properties of postgresql database
            $token = $this->db->query(
                "select * from tokens where val = ? and expire_at < current_timestamp",
                [$token]
            )->fetchArray();
            
            $tokenIsValid = sizeof($token) > 0; // check if the query get any result of database

            if(!$tokenIsValid) // check if token is valid
            {
                return json_encode(
                    array(
                        "error" => "404",
                        "error_message" => "token not valid",
                    )
                );
            }
        }
        parent::onConstruct(); // herency
    }

    public function getUsersAction($nick = NULL)
    {
        $users = array();
        
        if($nick === NULL) // return all users
        {
            $users = $this->db->query(
                "select * from users"
            )->fetchAll(PDO::FETCH_ASSOC);
        } else  // return users only with pattern
        {
            $nick = strtolower($nick);
            $users = $this->db->query(
                "select * from users where lower(nick) like ?",
                [
                    "%$nick%"
                ]
            )->fetchAll(PDO::FETCH_ASSOC);
        }

        return json_encode(
            $users
        );
    }
}

