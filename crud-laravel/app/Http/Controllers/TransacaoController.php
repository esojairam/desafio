<?php

namespace App\Http\Controllers;

use App\Models\Transacao;
use Illuminate\Http\Request;

class TransacaoController extends Controller
{
    public function index()
    {
        return Transacao::all();
    }

    public function store(Request $request)
    {
        $request->validate([
            'nome' => 'required',
            'data' => 'required|date',
            'tipo' => 'required|in:despesa,receita',
            'categoria' => 'required',
            'valor' => 'required|numeric|min:0',
        ]);

        return Transacao::create($request->all());
    }

    public function show($id)
    {
        return Transacao::findOrFail($id);
    }

    public function update(Request $request, $id)
    {
        $request->validate([
            'nome' => 'required',
            'data' => 'required|date',
            'tipo' => 'required|in:despesa,receita',
            'categoria' => 'required',
            'valor' => 'required|numeric|min:0',
        ]);

        $transacao = Transacao::findOrFail($id);
        $transacao->update($request->all());

        return $transacao;
    }

    public function destroy($id)
    {
        $transacao = Transacao::findOrFail($id);
        $transacao->delete();

        return response()->noContent();
    }
}

