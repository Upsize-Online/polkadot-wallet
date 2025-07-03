"use client";
import React, { useState, useEffect } from 'react';
import { UserGroupIcon, KeyIcon, ShieldCheckIcon, PlusIcon, TrashIcon, CheckIcon } from '@heroicons/react/24/outline';
import { useRouter } from 'next/navigation';

interface RoleAssignment {
  id: string;
  walletAddress: string;
  role: string;
  assignedAt: string;
  status: 'active' | 'pending' | 'revoked';
}

export default function OrgAdminPage() {
  const router = useRouter();
  const [walletAddress, setWalletAddress] = useState('');
  const [selectedRole, setSelectedRole] = useState('');
  const [isConnected, setIsConnected] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [roleAssignments, setRoleAssignments] = useState<RoleAssignment[]>([
    {
      id: '1',
      walletAddress: '5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY',
      role: 'Editor',
      assignedAt: '2024-01-15',
      status: 'active'
    },
    {
      id: '2',
      walletAddress: '5FHneW46xGXgs5mUiveU4sbTyGBzmstUspZC92UhjJM694ty',
      role: 'Coder',
      assignedAt: '2024-01-10',
      status: 'active'
    },
    {
      id: '3',
      walletAddress: '5FLSigC9HGRKVhB9FiEo4Y3koPsNmBmLJbpXg2mp1hXcS59Y',
      role: 'Criador de Conteúdo',
      assignedAt: '2024-01-08',
      status: 'pending'
    }
  ]);

  const roles = [
    { id: 'editor', name: 'Editor', description: 'Pode editar e publicar conteúdo' },
    { id: 'coder', name: 'Coder', description: 'Pode modificar código e funcionalidades' },
    { id: 'content-creator', name: 'Criador de Conteúdo', description: 'Pode criar e gerenciar conteúdo' },
    { id: 'designer', name: 'Designer', description: 'Pode criar designs e assets visuais' }
  ];

  useEffect(() => {
    function checkWallet() {
      setIsConnected(localStorage.getItem('walletConnected') === 'true');
    }
    checkWallet();
    window.addEventListener('walletConnected', checkWallet);
    return () => window.removeEventListener('walletConnected', checkWallet);
  }, []);

  useEffect(() => {
    if (!isConnected && !isLoading) {
      router.replace('/wallet');
    }
  }, [isConnected, isLoading, router]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setIsLoading(false);
    }
  }, []);

  const handleAssignRole = () => {
    if (!walletAddress || !selectedRole) return;

    const newAssignment: RoleAssignment = {
      id: Date.now().toString(),
      walletAddress,
      role: selectedRole,
      assignedAt: new Date().toISOString().split('T')[0],
      status: 'pending'
    };

    setRoleAssignments([...roleAssignments, newAssignment]);
    setWalletAddress('');
    setSelectedRole('');
  };

  const handleRevokeRole = (id: string) => {
    setRoleAssignments(roleAssignments.map(assignment => 
      assignment.id === id ? { ...assignment, status: 'revoked' } : assignment
    ));
  };

  const handleApproveRole = (id: string) => {
    setRoleAssignments(roleAssignments.map(assignment => 
      assignment.id === id ? { ...assignment, status: 'active' } : assignment
    ));
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'text-green-500 bg-green-100';
      case 'pending': return 'text-yellow-500 bg-yellow-100';
      case 'revoked': return 'text-red-500 bg-red-100';
      default: return 'text-gray-500 bg-gray-100';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'active': return 'Ativo';
      case 'pending': return 'Pendente';
      case 'revoked': return 'Revogado';
      default: return 'Desconhecido';
    }
  };

  if (isLoading) {
    return <div className="min-h-screen flex items-center justify-center text-lg text-white">Carregando...</div>;
  }
  if (!isConnected) {
    return null;
  }

  return (
    <div className="min-h-screen">
      <div className="max-w-7xl mx-auto px-4 py-8 bg-transparent">
        {/* Header */}
        <div className="mb-8">
          <div className="flex flex-row items-center gap-5 mb-4 min-h-[90px]">
            <div className="p-3 rounded-full flex-shrink-0 flex items-center justify-center" style={{ background: '#e50079' }}>
              <UserGroupIcon className="w-12 h-12 text-white" />
            </div>
            <div className="flex flex-col justify-center h-full">
              <h1 className="text-3xl font-bold text-white text-left">Administrador de Organização</h1>
              <p className="text-purple-200 text-left">Gerencie papéis e permissões da sua organização</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Painel de Atribuição de Papéis */}
          <div className="lg:col-span-1">
            <div className="box-polkadot-black-admin rounded-2xl p-6">
              <div className="flex items-center gap-2 mb-6">
                <KeyIcon className="w-6 h-6 text-purple-300" />
                <h2 className="text-xl font-semibold text-white">Atribuir Papel</h2>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-purple-200 mb-2">
                    Endereço da Carteira Polkadot
                  </label>
                  <input
                    type="text"
                    value={walletAddress}
                    onChange={(e) => setWalletAddress(e.target.value)}
                    placeholder="5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY"
                    className="w-full px-4 py-3 bg-white/10 border border-purple-300/30 rounded-lg text-white placeholder-purple-300/50 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-purple-200 mb-2">
                    Papel
                  </label>
                  <select
                    value={selectedRole}
                    onChange={(e) => setSelectedRole(e.target.value)}
                    className="select-polkadot w-full px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#e50079] focus:border-transparent transition-colors duration-200 hover:bg-[#b8005c]"
                  >
                    <option value="" className="bg-[#e50079] text-white">Selecione um papel</option>
                    {roles.map((role) => (
                      <option key={role.id} value={role.name} className="bg-[#e50079] text-white">
                        {role.name}
                      </option>
                    ))}
                  </select>
                </div>

                <button
                  onClick={handleAssignRole}
                  disabled={!walletAddress || !selectedRole}
                  className={`w-full flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-semibold uppercase transition-all duration-200
                    ${!walletAddress || !selectedRole
                      ? 'bg-[#e50079] text-white opacity-50 cursor-not-allowed'
                      : 'bg-[#e50079] hover:bg-[#b8005c] text-white cursor-pointer'}
                  `}
                >
                  <PlusIcon className="w-5 h-5 text-white" />
                  Atribuir Papel
                </button>
              </div>
            </div>

            {/* Estatísticas */}
            <div className="box-polkadot-black-admin rounded-2xl p-6 mt-6">
              <div className="flex items-center gap-2 mb-4">
                <ShieldCheckIcon className="w-6 h-6 text-purple-300" />
                <h3 className="text-lg font-semibold text-white">Estatísticas</h3>
              </div>
              
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-purple-200">Total de Atribuições:</span>
                  <span className="text-white font-semibold">{roleAssignments.length}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-purple-200">Ativos:</span>
                  <span className="text-green-400 font-semibold">
                    {roleAssignments.filter(a => a.status === 'active').length}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-purple-200">Pendentes:</span>
                  <span className="text-yellow-400 font-semibold">
                    {roleAssignments.filter(a => a.status === 'pending').length}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-purple-200">Revogados:</span>
                  <span className="text-red-400 font-semibold">
                    {roleAssignments.filter(a => a.status === 'revoked').length}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Lista de Atribuições */}
          <div className="lg:col-span-2">
            <div className="box-polkadot-black-admin rounded-2xl p-6">
              <div className="flex items-center gap-2 mb-6">
                <UserGroupIcon className="w-6 h-6 text-purple-300" />
                <h2 className="text-xl font-semibold text-white">Atribuições de Papéis</h2>
              </div>

              <div className="space-y-4">
                {roleAssignments.map((assignment) => (
                  <div
                    key={assignment.id}
                    className="bg-white/5 rounded-xl p-4 border border-white/10 hover:bg-white/10 transition-colors duration-200"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <div className="text-sm font-medium text-purple-200">
                            {assignment.walletAddress.slice(0, 8)}...{assignment.walletAddress.slice(-8)}
                          </div>
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(assignment.status)}`}>
                            {getStatusText(assignment.status)}
                          </span>
                        </div>
                        <div className="text-white font-semibold">{assignment.role}</div>
                        <div className="text-sm text-purple-300">Atribuído em: {assignment.assignedAt}</div>
                      </div>
                      
                      <div className="flex items-center gap-2">
                        {assignment.status === 'pending' && (
                          <button
                            onClick={() => handleApproveRole(assignment.id)}
                            className="p-2 bg-green-600 hover:bg-green-700 rounded-lg transition-colors duration-200"
                            title="Aprovar"
                          >
                            <CheckIcon className="w-4 h-4 text-white" />
                          </button>
                        )}
                        {assignment.status !== 'revoked' && (
                          <button
                            onClick={() => handleRevokeRole(assignment.id)}
                            className="p-2 bg-red-600 hover:bg-red-700 rounded-lg transition-colors duration-200"
                            title="Revogar"
                          >
                            <TrashIcon className="w-4 h-4 text-white" />
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                ))}

                {roleAssignments.length === 0 && (
                  <div className="text-center py-12">
                    <UserGroupIcon className="w-12 h-12 text-purple-300 mx-auto mb-4" />
                    <p className="text-purple-200">Nenhuma atribuição de papel encontrada</p>
                    <p className="text-purple-300 text-sm">Comece atribuindo papéis para carteiras Polkadot</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 