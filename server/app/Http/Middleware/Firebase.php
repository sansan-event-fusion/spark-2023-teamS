<?php

namespace App\Http\Middleware;

use Kreait\Firebase\Contract\Auth;
use Kreait\Firebase\Exception\Auth\FailedToVerifyToken;

class Firebase
{
    private Auth $auth;
    public function __construct(Auth $auth)
    {
        $this->auth = $auth;
    }

    public function handle($request, \Closure $next)
    {
        $idTokenString = $request->headers->get('authorization');
        $token = trim(str_replace('Bearer', '', $idTokenString));

        // フロントから取得したトークンを認証
        try {
            $verifiedIdToken = $this->auth->verifyIdToken($token);
        } catch (FailedToVerifyToken $e) {
            echo 'The token is invalid: '.$e->getMessage();
        }

        // 認証したfirebaseのUidを代入
        $firebaseUid = $verifiedIdToken->claims()->get('sub');

        $request->merge([
            'firebase_uid' => $firebaseUid,
        ]);

        return $next($request);
    }
}
