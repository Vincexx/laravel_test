<?php

namespace App\Http\Controllers\Home;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Post;
use App\Http\Requests\Post\StoreRequest;

class PostController extends Controller
{
    public function getAllPosts() {
        return response()->json(Post::all(), 200);
    }
    
    public function getAuthPosts(Request $request) {
        return response()->json($request->user()->posts, 200);
    }

    public function edit(Post $post) {
        return response()->json($post);
    }
    
    public function store(StoreRequest $request) {
        $user = $request->user();
        
        $user->posts()->create($request->only('title', 'body'));

        return response()->json([
            'message' => 'Post has been created.'
        ], 201);
    
    }

    public function update(StoreRequest $request, Post $post) {

        $post->update($request->only('title', 'body'));

        return response()->json([
            'message' => 'Post has been updated.'
        ], 200);
    }

    public function destroy(Post $post) {
        $post->delete();

        return response()->json([
            'message' => 'Post has been deleted.'
        ], 200);
    }   
}
